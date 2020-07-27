local header = [[
// Generated with docs.lua
// github.com/codecat/beamngts

interface Table_FieldInfo {
	type: string;
	doc: string;
	id: number;
}

interface Lua {
	blacklistLogLevel(...args: any[]): any;
	enableStackTraceFile(...args: any[]): any;
	findObjectsByClassAsTable(...args: any[]): any;
	getAllObjects(...args: any[]): any;
	getDevLogStats(...args: any[]): any;
	getOSLanguage(...args: any[]): any;
	getSelectedLanguage(...args: any[]): any;
	getSteamLanguage(...args: any[]): any;
	log(...args: any[]): any;
	queueLuaCommand(...args: any[]): any;
	reloadLanguages(...args: any[]): any;
	requestReload(...args: any[]): any;
	userLanguage: any;
	lastDebugFocusPos: any;
}

interface LoadingManager {
	triggerUpdate(): void;
	setLoadingScreenEnabled(enabled: boolean): void;
	push(str: string): string;
	pop(str: string): void;
	loadLevelJsonObjects(dir: string, glob: string): void;
	_triggerSignalLevelLoaded(): void;
}
]]

local known = {
	ColorF = {
		ColorF = {
			args = {
				{ name = "r", type = "number" },
				{ name = "g", type = "number" },
				{ name = "b", type = "number" },
				{ name = "a", type = "number" },
			},
		},
		setFromString = {
			args = {
				{ name = "str", type = "string" },
			},
			ret = "void",
		},
		r = "number", red = "number",
		g = "number", green = "number",
		b = "number", blue = "number",
		a = "number", alpha = "number",
	},

	ColorI = {
		ColorI = {
			args = {
				{ name = "r", type = "number" },
				{ name = "g", type = "number" },
				{ name = "b", type = "number" },
				{ name = "a", type = "number" },
			},
		},
		setFromString = {
			args = {
				{ name = "str", type = "string" },
			},
			ret = "void",
		},
		r = "number", red = "number",
		g = "number", green = "number",
		b = "number", blue = "number",
		a = "number", alpha = "number",
	},

	ConsoleObject = {
		getFieldList = {
			args = {},
			ret = "Table_FieldInfo[]",
		},
		getFields = {
			args = {},
			ret = "Table_FieldInfo[]",
		},
		getFieldsForEditor = {
			args = {},
			ret = "Table_FieldInfo[]",
		},
	},

	BeamNGTrigger = {
		clearAllObjects = {
			args = {},
			ret = "void",
		},
		isPointContained = {
			ret = "boolean",
		},
		color = "ColorI",
	},
}

(function()
	local dumpstaticclass
	local dumpclass
	local dumpmodule

	local visit
	local findtypes

	local visited = {}

	local fh = io.open("BeamNG.d.ts", "w")

	fh:write(header .. "\n")

	local function foreach(t, func)
		local keys = {}
		for k in pairs(t) do
			if type(k) == "string" then
				table.insert(keys, k)
			end
		end
		table.sort(keys)

		for _, k in ipairs(keys) do
			func(k, t[k])
		end
	end

	local function findFieldName(objname, fieldname)
		local knownobj = known[objname]
		if knownobj ~= nil then
			local knownfield = knownobj[fieldname]
			if knownfield ~= nil then
				if type(knownfield) ~= "string" then
					error("Known field for " .. objname .. "." .. fieldname .. " is not of type string!")
				end
				return knownfield
			end
		end
		return "any"
	end

	local function findFuncSignature(objname, funcname, defret)
		if funcname == "eval" then
			funcname = funcname .. "_"
		end

		local knownobj = known[objname]
		if knownobj ~= nil then
			local knownfunc = knownobj[funcname]
			if knownfunc ~= nil then
				local ret = funcname .. "("
				if knownfunc.args ~= nil then
					for i, arg in ipairs(knownfunc.args) do
						if i > 1 then
							ret = ret .. ", "
						end
						ret = ret .. arg.name .. ": " .. arg.type
					end
				else
					ret = ret .. "...args: any[]"
				end
				ret = ret .. "): "
				if knownfunc.ret ~= nil then
					ret = ret .. knownfunc.ret
				else
					ret = ret .. (defret or "any")
				end
				return ret
			end
		end

		return funcname .. "(...args: any[]): " .. (defret or "any")
	end

	dumpclass = function(t, name)
		--
	end

	dumpstaticclass = function(t, name)
		--print("Class: " .. name)
		fh:write("interface " .. name)

		-- Parent class
		if t["___super"] ~= nil then
			--print(":::", "super", t.___super.___type)
			local parentname = ""
			for s, n in t.___super.___type:gmatch("(.*)<(.*)>") do
				parentname = n
			end
			fh:write(" extends " .. parentname)
		end
		fh:write(" {\n")

		-- Instance methods
		foreach(t.___class, function(k, v)
			if not k:match("^__") then
				--print("...", k, type(v))
				fh:write("\t" .. findFuncSignature(name, k) .. ";\n")
			end
		end)

		-- Instance properties
		foreach(t.___class.___getters, function(k, v)
			--print("... get", k, v)
			fh:write("\t" .. k .. ": " .. findFieldName(name, k) .. ";\n")
		end)

		fh:write("}\n")
		fh:write("declare namespace " .. name .. " {\n")

		-- Static functions and fields
		foreach(t, function(k, v)
			if not k:match("^__") then
				--print("---", k, type(v))
				fh:write("\texport function " .. findFuncSignature(name, k) .. ";\n")
			end
		end)

		-- Static properties
		foreach(t.___getters, function(k, v)
			--print("... get", k, type(v))
			fh:write("\tvar " .. k .. ": " .. findFieldName(name, k) .. ";\n")
		end)

		fh:write("}\n")

		-- Factory
		if t["__call"] ~= nil then
			--print("!!!", "factory exists")
			fh:write("declare function " .. findFuncSignature(name, name, name) .. ";\n")
		end

		fh:write("\n")
	end

	dumpmodule = function(t, name)
		--print("Module: " .. name)
		fh:write("declare namespace " .. name:gsub("::", ".") .. " {\n")

		local checkLater = {}

		foreach(t, function(k, v)
			if type(v) == "table" then
				table.insert(checkLater, v)
			else
				-- Static functions and fields
				if not k:match("^__") then
					--print("...", k, v)
					--fh:write("\texport function " .. k .. "(...args: any[]): any;\n")
					fh:write("\texport function " .. findFuncSignature(name, k) .. ";\n")
				end
			end
		end)

		-- Static properties
		foreach(t.___getters, function(k, v)
			--print("... get", k, v)
			fh:write("\tvar " .. k .. ": " .. findFieldName(name, k) .. ";\n")
		end)

		fh:write("}\n")

		for i,v in ipairs(checkLater) do
			findtypes(v)
		end
	end

	visit = function(t)
		if visited[t] == true then
			return
		end
		visited[t] = true

		for s, n in t.___type:gmatch("(.*)<(.*)>") do
			if s == "static_class" then
				dumpstaticclass(t, n)
			elseif s == "class" then
				dumpclass(t, n)
			elseif s == "module" then
				dumpmodule(t, n)
			end
		end
	end

	findtypes = function(t)
		if (type(t) == "table" or type(t) == "userdata") and t.___type ~= nil then
			visit(t)
		end
	end

	foreach(_G, function(k, v)
		local firstchar = k:sub(1, 1)
		if firstchar == firstchar:upper() then
			findtypes(v)
		end
	end)

	foreach(_G, function(k, v)
		if type(v) == "userdata" then
			if v.___type ~= nil then
				for s, n in v.___type:gmatch("(.*)<(.*)>") do
					fh:write("declare let " .. k .. ": " .. n .. ";\n")
				end
			end
		end
	end)

	print("Done!")

	fh:close()
end)()
