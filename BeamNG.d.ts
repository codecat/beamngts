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

interface AIPath extends DecalRoad {
}
declare namespace AIPath {
}
declare function AIPath(...args: any[]): AIPath;

interface AIPlayer extends Player {
	clearAim(...args: any[]): any;
	clearMoveTrigger(...args: any[]): any;
	clearMoveTriggers(...args: any[]): any;
	findCover(...args: any[]): any;
	findNavMesh(...args: any[]): any;
	followNavPath(...args: any[]): any;
	followObject(...args: any[]): any;
	getAiPose(...args: any[]): any;
	getAimLocation(...args: any[]): any;
	getAimObject(...args: any[]): any;
	getMoveDestination(...args: any[]): any;
	getMoveSpeed(...args: any[]): any;
	getMoveTrigger(...args: any[]): any;
	getNavMesh(...args: any[]): any;
	getNavSize(...args: any[]): any;
	getPathDestination(...args: any[]): any;
	repath(...args: any[]): any;
	setAiPose(...args: any[]): any;
	setAimLocation(...args: any[]): any;
	setMoveDestination(...args: any[]): any;
	setMoveSpeed(...args: any[]): any;
	setMoveTrigger(...args: any[]): any;
	setNavSize(...args: any[]): any;
	setPathDestination(...args: any[]): any;
	stop(...args: any[]): any;
}
declare namespace AIPlayer {
}

interface ActionMap extends SimObject {
	bindCmd(...args: any[]): any;
	bindFull(...args: any[]): any;
	clear(...args: any[]): any;
	pop(...args: any[]): any;
	push(...args: any[]): any;
	pushFirst(...args: any[]): any;
	setEnabled(...args: any[]): any;
	enabled: any;
	trapHandledEvents: any;
}
declare namespace ActionMap {
	export function addToFilter(...args: any[]): any;
	export function clearFilters(...args: any[]): any;
	export function getInputCommands(...args: any[]): any;
	export function getList(...args: any[]): any;
	export function sendInputCommand(...args: any[]): any;
}
declare function ActionMap(...args: any[]): ActionMap;

interface AdvancedLightBinManager extends RenderTexTargetBinManager {
}
declare namespace AdvancedLightBinManager {
}

interface AngAxisF {
	setFromEuler(...args: any[]): any;
	setFromMatrix(...args: any[]): any;
	toEuler(...args: any[]): any;
	toQuatF(...args: any[]): any;
	angle: any;
	axis: any;
}
declare namespace AngAxisF {
}
declare function AngAxisF(...args: any[]): AngAxisF;

interface AnnotationManager {
}
declare namespace AnnotationManager {
	export function convertTexturesFromOldTable(...args: any[]): any;
	export function getAnnotations(...args: any[]): any;
}

interface ArrayObject extends SimObject {
	add(...args: any[]): any;
	append(...args: any[]): any;
	count(...args: any[]): any;
	countKey(...args: any[]): any;
	countValue(...args: any[]): any;
	crop(...args: any[]): any;
	duplicate(...args: any[]): any;
	echo(...args: any[]): any;
	empty(...args: any[]): any;
	erase(...args: any[]): any;
	getCurrent(...args: any[]): any;
	getIndexFromKey(...args: any[]): any;
	getIndexFromValue(...args: any[]): any;
	getKey(...args: any[]): any;
	getValue(...args: any[]): any;
	insert(...args: any[]): any;
	moveNext(...args: any[]): any;
	pop_back(...args: any[]): any;
	push_back(...args: any[]): any;
	setCurrent(...args: any[]): any;
	setKey(...args: any[]): any;
	setValue(...args: any[]): any;
	sort(...args: any[]): any;
	sorta(...args: any[]): any;
	sortd(...args: any[]): any;
	sortf(...args: any[]): any;
	sortfd(...args: any[]): any;
	sortfk(...args: any[]): any;
	sortfkd(...args: any[]): any;
	sortk(...args: any[]): any;
	sortka(...args: any[]): any;
	sortkd(...args: any[]): any;
	sortn(...args: any[]): any;
	sortna(...args: any[]): any;
	sortnd(...args: any[]): any;
	sortnk(...args: any[]): any;
	sortnka(...args: any[]): any;
	sortnkd(...args: any[]): any;
	uniqueKey(...args: any[]): any;
	uniqueValue(...args: any[]): any;
}
declare namespace ArrayObject {
}

interface BNGBase_FS_IFileSystem {
	closeDirectory(...args: any[]): any;
	copyFile(...args: any[]): any;
	directoryCreate(...args: any[]): any;
	directoryExists(...args: any[]): any;
	directoryList(...args: any[]): any;
	directoryRemove(...args: any[]): any;
	expandFilename(...args: any[]): any;
	fileExists(...args: any[]): any;
	fileSize(...args: any[]): any;
	findFiles(...args: any[]): any;
	findFilesByPattern(...args: any[]): any;
	findFilesByRootPattern(...args: any[]): any;
	getFileRealPath(...args: any[]): any;
	getGamePath(...args: any[]): any;
	getLastError(...args: any[]): any;
	hashFile(...args: any[]): any;
	hashFileSHA1(...args: any[]): any;
	isMounted(...args: any[]): any;
	mount(...args: any[]): any;
	mountList(...args: any[]): any;
	openDirectory(...args: any[]): any;
	openFile(...args: any[]): any;
	removeFile(...args: any[]): any;
	renameFile(...args: any[]): any;
	stat(...args: any[]): any;
	triggerFilesChanged(...args: any[]): any;
	unmount(...args: any[]): any;
}
declare namespace BNGBase_FS_IFileSystem {
}

interface BString {
	c_str(...args: any[]): any;
}
declare namespace BString {
}
declare function BString(...args: any[]): BString;

interface BaseMaterial extends SimObject {
}
declare namespace BaseMaterial {
}

interface BasicClouds extends SceneObject {
}
declare namespace BasicClouds {
}

interface BeamEngine {
	addFirewallException(...args: any[]): any;
	castRay(...args: any[]): any;
	decalManagerLoad(...args: any[]): any;
	deleteDataBlocks(...args: any[]): any;
	enterNextVehicle(...args: any[]): any;
	enterVehicle(...args: any[]): any;
	executeJS(...args: any[]): any;
	executeStreamJS(...args: any[]): any;
	exitVehicle(...args: any[]): any;
	getEnabled(...args: any[]): any;
	getFFBConfig(...args: any[]): any;
	getGroundModel(...args: any[]): any;
	getGroundModelByID(...args: any[]): any;
	getGroundModelCount(...args: any[]): any;
	getGroundModelIDByName(...args: any[]): any;
	getObject(...args: any[]): any;
	getObjectByID(...args: any[]): any;
	getObjectCount(...args: any[]): any;
	getPhysicsDeterministic(...args: any[]): any;
	getPhysicsRunning(...args: any[]): any;
	getPhysicsSpeedFactor(...args: any[]): any;
	getPlayerVehicle(...args: any[]): any;
	getPlayerVehicleID(...args: any[]): any;
	getReplayAbsPos(...args: any[]): any;
	getSimulationTimeScale(...args: any[]): any;
	getSurfaceHeightBelow(...args: any[]): any;
	getWorkingDirectory(...args: any[]): any;
	isBlockedByFirewall(...args: any[]): any;
	loadTireMarks(...args: any[]): any;
	makeRelativePath(...args: any[]): any;
	physicsDestroyWorld(...args: any[]): any;
	physicsInitWorld(...args: any[]): any;
	physicsStartSimulation(...args: any[]): any;
	physicsStep(...args: any[]): any;
	physicsStopSimulation(...args: any[]): any;
	queueAllObjectLua(...args: any[]): any;
	queueAllObjectLuaExcept(...args: any[]): any;
	queueJS(...args: any[]): any;
	queueStreamJS(...args: any[]): any;
	reloadAllVehicles(...args: any[]): any;
	reloadCollision(...args: any[]): any;
	reloadStaticCollision(...args: any[]): any;
	reloadVehicle(...args: any[]): any;
	resetAll(...args: any[]): any;
	resetGroundModels(...args: any[]): any;
	resetTireMarks(...args: any[]): any;
	resetVehicle(...args: any[]): any;
	saveTireMarks(...args: any[]): any;
	setDynamicCollisionEnabled(...args: any[]): any;
	setEnabled(...args: any[]): any;
	setGroundModel(...args: any[]): any;
	setPhysicsDeterministic(...args: any[]): any;
	setPhysicsRunning(...args: any[]): any;
	setPhysicsSpeedFactor(...args: any[]): any;
	setSeaLevelTemperatureK(...args: any[]): any;
	setSimulationTimeScale(...args: any[]): any;
	setThreadingLayout(...args: any[]): any;
	sfxGetAvailableDevices(...args: any[]): any;
	toggleEnabled(...args: any[]): any;
	interpolateAlternative: any;
	interpolateFull: any;
	interpolateLua: any;
	interpolatePosition: any;
	multiseatTags: any;
	nodeGrabber: any;
	nodeStream: any;
	persistenceLuaData: any;
	replayA: any;
	replayAlpha: any;
	replayB: any;
	replayC: any;
	replayD: any;
	replayE: any;
	replayF: any;
	replayG: any;
	replayH: any;
	replayI: any;
	replayJ: any;
	replayK: any;
	replayL: any;
	replayLevel: any;
	replayM: any;
	replayN: any;
	replayO: any;
	replayP: any;
	replayQ: any;
	replayR: any;
}
declare namespace BeamEngine {
}

interface BeamNGBooster extends GameBase {
}
declare namespace BeamNGBooster {
}

interface BeamNGEnvTrigger extends GameBase {
}
declare namespace BeamNGEnvTrigger {
}

interface BeamNGGameplayArea extends SceneObject {
}
declare namespace BeamNGGameplayArea {
}

interface BeamNGNodeGrabber {
	addStrength(...args: any[]): any;
	clearVehicleFixedNodes(...args: any[]): any;
	fixCurrentNode(...args: any[]): any;
	onMouseButton(...args: any[]): any;
	renderNodes(...args: any[]): any;
	renderSize: any;
}
declare namespace BeamNGNodeGrabber {
}

interface BeamNGNodeStreamPhysFS {
	play(...args: any[]): any;
	record(...args: any[]): any;
	requestState(...args: any[]): any;
	seek(...args: any[]): any;
	setPaused(...args: any[]): any;
	setSpeed(...args: any[]): any;
	stop(...args: any[]): any;
}
declare namespace BeamNGNodeStreamPhysFS {
}

interface BeamNGParking extends GameBase {
}
declare namespace BeamNGParking {
}

interface BeamNGPointOfInterest extends SceneObject {
}
declare namespace BeamNGPointOfInterest {
}
declare function BeamNGPointOfInterest(...args: any[]): BeamNGPointOfInterest;

interface BeamNGSpecialPointlight extends PointLight {
}
declare namespace BeamNGSpecialPointlight {
}
declare function BeamNGSpecialPointlight(...args: any[]): BeamNGSpecialPointlight;

interface BeamNGSpecialSpotlight extends SpotLight {
}
declare namespace BeamNGSpecialSpotlight {
}
declare function BeamNGSpecialSpotlight(...args: any[]): BeamNGSpecialSpotlight;

interface BeamNGTestTriangle extends SceneObject {
}
declare namespace BeamNGTestTriangle {
}

interface BeamNGTrigger extends GameBase {
	clearAllObjects(): void;
	isPointContained(...args: any[]): boolean;
	color: ColorI;
	debug: any;
}
declare namespace BeamNGTrigger {
}
declare function BeamNGTrigger(...args: any[]): BeamNGTrigger;

interface BeamNGVehicle extends ShapeBase {
	autoplace(...args: any[]): any;
	createUITexture(...args: any[]): any;
	destroyUITexture(...args: any[]): any;
	engineSoundInit(...args: any[]): any;
	engineSoundNodes(...args: any[]): any;
	engineSoundParameter(...args: any[]): any;
	engineSoundParameterList(...args: any[]): any;
	engineSoundUpdate(...args: any[]): any;
	exportColladaMesh(...args: any[]): any;
	getBBCenter(...args: any[]): any;
	getBSphereCenter(...args: any[]): any;
	getBSphereRadius(...args: any[]): any;
	getCameraDepthUnderwater(...args: any[]): any;
	getCameraTransform(...args: any[]): any;
	getColorFTable(...args: any[]): any;
	getCornerPosition(...args: any[]): any;
	getDirectionVector(...args: any[]): any;
	getDirectionVectorUp(...args: any[]): any;
	getEyeTransformF(...args: any[]): any;
	getFFBID(...args: any[]): any;
	getInitialLength(...args: any[]): any;
	getInitialWidth(...args: any[]): any;
	getJBeamFilename(...args: any[]): any;
	getMeshNames(...args: any[]): any;
	getNodeCount(...args: any[]): any;
	getNodePosition(...args: any[]): any;
	getNodeVelocity(...args: any[]): any;
	getNodeWheelId(...args: any[]): any;
	getPath(...args: any[]): any;
	getRefNodeId(...args: any[]): any;
	getRefNodeMatrix(...args: any[]): any;
	getSpawnAABBRadius(...args: any[]): any;
	getSpawnLocalAABB(...args: any[]): any;
	getSpawnWorldOOBB(...args: any[]): any;
	getSpawnWorldOOBBRearPoint(...args: any[]): any;
	getTargetCount(...args: any[]): any;
	getTargetName(...args: any[]): any;
	getVelocity(...args: any[]): any;
	getViewportFillingCameraDistance(...args: any[]): any;
	getWheelAxisNodes(...args: any[]): any;
	getWheelCount(...args: any[]): any;
	isCameraUnderwater(...args: any[]): any;
	isRenderMaterialsReady(...args: any[]): any;
	isUITexture(...args: any[]): any;
	lua(...args: any[]): any;
	queueJSUITexture(...args: any[]): any;
	queueLuaCommand(...args: any[]): any;
	reload(...args: any[]): any;
	reloadAP(...args: any[]): any;
	requestReload(...args: any[]): any;
	requestReset(...args: any[]): any;
	reset(...args: any[]): any;
	resetBrokenFlexMesh(...args: any[]): any;
	setCameraPosRot(...args: any[]): any;
	setColor(...args: any[]): any;
	setMeshAlpha(...args: any[]): any;
	setMeshAnnotationColor(...args: any[]): any;
	setMeshColor(...args: any[]): any;
	setPositionRotation(...args: any[]): any;
	setSpawnLocalAABB(...args: any[]): any;
	setVehicleTransform(...args: any[]): any;
	showEngineDirection(...args: any[]): any;
	spawnObject(...args: any[]): any;
	spawnObjectWithPosRot(...args: any[]): any;
	spawnObjectWithTransform(...args: any[]): any;
	camFOV: any;
	playerUsable: any;
}
declare namespace BeamNGVehicle {
}
declare function BeamNGVehicle(...args: any[]): BeamNGVehicle;

interface BeamNGWaypoint extends SceneObject {
	excludeFromMap: any;
}
declare namespace BeamNGWaypoint {
	var debugDrawAll: any;
}
declare function BeamNGWaypoint(...args: any[]): BeamNGWaypoint;

interface Box3F {
	extend(...args: any[]): any;
	getCenter(...args: any[]): any;
	getExtents(...args: any[]): any;
	getLength(...args: any[]): any;
	isOverlapped(...args: any[]): any;
	setCenter(...args: any[]): any;
	setExtents(...args: any[]): any;
	maxExtents: any;
	minExtents: any;
}
declare namespace Box3F {
}
declare function Box3F(...args: any[]): Box3F;

interface Brush extends Selection {
}
declare namespace Brush {
}

interface Camera extends ShapeBase {
	autoFitRadius(...args: any[]): any;
	getCameraDepthUnderwater(...args: any[]): any;
	getCameraFov(...args: any[]): any;
	getMode(...args: any[]): any;
	getPosition(...args: any[]): any;
	getRotationEuler(...args: any[]): any;
	getVelocity(...args: any[]): any;
	isCameraUnderwater(...args: any[]): any;
	setAngularVelocity(...args: any[]): any;
	setEditOrbitMode(...args: any[]): any;
	setEditOrbitPoint(...args: any[]): any;
	setFlyMode(...args: any[]): any;
	setRotation(...args: any[]): any;
	setValidEditOrbitPoint(...args: any[]): any;
}
declare namespace Camera {
}
declare function Camera(...args: any[]): Camera;

interface CameraBookmark extends MissionMarker {
	observer: any;
}
declare namespace CameraBookmark {
}
declare function CameraBookmark(...args: any[]): CameraBookmark;

interface CameraData extends ShapeBaseData {
}
declare namespace CameraData {
}
declare function CameraData(...args: any[]): CameraData;

interface CefGui extends GuiContainer {
	loadURL(...args: any[]): any;
}
declare namespace CefGui {
}
declare function CefGui(...args: any[]): CefGui;

interface CloudLayer extends SceneObject {
}
declare namespace CloudLayer {
}
declare function CloudLayer(...args: any[]): CloudLayer;

interface ColorF {
	asLinear4F(...args: any[]): any;
	setFromString(str: string): void;
	a: number;
	alpha: number;
	b: number;
	blue: number;
	g: number;
	green: number;
	r: number;
	red: number;
}
declare namespace ColorF {
}
declare function ColorF(r: number, g: number, b: number, a: number): ColorF;

interface ColorI {
	setFromString(str: string): void;
	a: number;
	alpha: number;
	b: number;
	blue: number;
	g: number;
	green: number;
	r: number;
	red: number;
}
declare namespace ColorI {
}
declare function ColorI(r: number, g: number, b: number, a: number): ColorI;

interface CompoundUndoAction extends UndoAction {
}
declare namespace CompoundUndoAction {
}

interface ConsoleBaseType {
	getListNext(...args: any[]): any;
	getTypeClassName(...args: any[]): any;
	getTypeName(...args: any[]): any;
}
declare namespace ConsoleBaseType {
	export function getListHead(...args: any[]): any;
}

interface ConsoleLogger extends SimObject {
}
declare namespace ConsoleLogger {
}

interface ConsoleObject {
	getFieldInfo(...args: any[]): any;
	getFieldList(): Table_FieldInfo[];
	getFields(): Table_FieldInfo[];
	getFieldsForEditor(): Table_FieldInfo[];
}
declare namespace ConsoleObject {
}

interface ConvexShape extends SceneObject {
}
declare namespace ConvexShape {
}

interface CoverPoint extends SceneObject {
	isOccupied(...args: any[]): any;
}
declare namespace CoverPoint {
}

interface CreatorTree extends GuiArrayCtrl {
}
declare namespace CreatorTree {
}
declare function CreatorTree(...args: any[]): CreatorTree;

interface Crowd extends SceneObject {
	addAgent(...args: any[]): any;
	setMoveTargetPointed(...args: any[]): any;
}
declare namespace Crowd {
}

interface CubemapData extends SimObject {
	getFilename(...args: any[]): any;
	updateFaces(...args: any[]): any;
}
declare namespace CubemapData {
}

interface CustomMaterial extends Material {
}
declare namespace CustomMaterial {
}
declare function CustomMaterial(...args: any[]): CustomMaterial;

interface DBDeleteUndoAction extends UndoAction {
}
declare namespace DBDeleteUndoAction {
}

interface DBRetargetUndoAction extends UndoAction {
}
declare namespace DBRetargetUndoAction {
}

interface DICreateUndoAction extends UndoAction {
}
declare namespace DICreateUndoAction {
}

interface DIDeleteUndoAction extends UndoAction {
}
declare namespace DIDeleteUndoAction {
}

interface DbgFileView extends GuiArrayCtrl {
}
declare namespace DbgFileView {
}
declare function DbgFileView(...args: any[]): DbgFileView;

interface DebugDrawer extends SimObject {
	drawAxisGizmo(...args: any[]): any;
	drawBox(...args: any[]): any;
	drawCircle(...args: any[]): any;
	drawCylinder(...args: any[]): any;
	drawLine(...args: any[]): any;
	drawQuadSolid(...args: any[]): any;
	drawSphere(...args: any[]): any;
	drawSquarePrism(...args: any[]): any;
	drawText(...args: any[]): any;
	drawTextAdvanced(...args: any[]): any;
	drawTri(...args: any[]): any;
	drawTriSolid(...args: any[]): any;
	renderGroundModelDebug(...args: any[]): any;
	renderStaticColDebug(...args: any[]): any;
	setLastTTL(...args: any[]): any;
	setLastZTest(...args: any[]): any;
	setSolidTriCulling(...args: any[]): any;
	toggleDrawing(...args: any[]): any;
	toggleFreeze(...args: any[]): any;
}
declare namespace DebugDrawer {
}

interface DecalData extends SimDataBlock {
	postApply(...args: any[]): any;
}
declare namespace DecalData {
}
declare function DecalData(...args: any[]): DecalData;

interface DecalInstance {
	getWorldBox(...args: any[]): any;
	getWorldMatrix(...args: any[]): any;
	flags: any;
	id: any;
	normal: any;
	position: any;
	size: any;
	tangent: any;
	template: any;
	textureRectIdx: any;
}
declare namespace DecalInstance {
}

interface DecalManager extends SceneObject {
}
declare namespace DecalManager {
}

interface DecalRoad extends SceneObject {
	containsPoint(...args: any[]): any;
	deleteNode(...args: any[]): any;
	getEdgeCount(...args: any[]): any;
	getEdgesTable(...args: any[]): any;
	getLeftEdgePosition(...args: any[]): any;
	getMiddleEdgePosition(...args: any[]): any;
	getNodeCount(...args: any[]): any;
	getNodePosition(...args: any[]): any;
	getNodeWidth(...args: any[]): any;
	getNodesTable(...args: any[]): any;
	getRightEdgePosition(...args: any[]): any;
	insertNode(...args: any[]): any;
	postApply(...args: any[]): any;
	regenerate(...args: any[]): any;
	setNodePosition(...args: any[]): any;
	setNodeWidth(...args: any[]): any;
}
declare namespace DecalRoad {
}
declare function DecalRoad(...args: any[]): DecalRoad;

interface DeferredDecal extends SceneObject {
}
declare namespace DeferredDecal {
}

interface EditManager extends GuiControl {
}
declare namespace EditManager {
}
declare function EditManager(...args: any[]): EditManager;

interface EditTSCtrl extends GuiTSCtrl {
	getDisplayType(...args: any[]): any;
	getOrthoFOV(...args: any[]): any;
	isMiddleMouseDown(...args: any[]): any;
	renderBox(...args: any[]): any;
	renderCircle(...args: any[]): any;
	renderLine(...args: any[]): any;
	renderSphere(...args: any[]): any;
	renderTriangle(...args: any[]): any;
	setDisplayType(...args: any[]): any;
	setOrthoFOV(...args: any[]): any;
}
declare namespace EditTSCtrl {
}
declare function EditTSCtrl(...args: any[]): EditTSCtrl;

interface EditorGizmo extends SimObject {
}
declare namespace EditorGizmo {
}
declare function EditorGizmo(...args: any[]): EditorGizmo;

interface EditorGizmoProfile extends SimObject {
	allowSnapRotations: any;
	allowSnapScale: any;
	gridColor: any;
	gridSize: any;
	planeDim: any;
	renderInfoText: any;
	renderMoveGrid: any;
	renderPlane: any;
	renderPlaneHashes: any;
	renderSolid: any;
	renderWhenUsed: any;
	rotationSnap: any;
	scaleSnap: any;
	snapToGrid: any;
}
declare namespace EditorGizmoProfile {
}
declare function EditorGizmoProfile(...args: any[]): EditorGizmoProfile;

interface EditorToolBase extends SimGroup {
}
declare namespace EditorToolBase {
}
declare function EditorToolBase(...args: any[]): EditorToolBase;

declare namespace Engine {
	export function castRay(...args: any[]): any;
	export function createPhysics(...args: any[]): any;
	export function destroyPhysics(...args: any[]): any;
	export function enableRenderMonitor3(...args: any[]): any;
	export function getCollisionDebugData(...args: any[]): any;
	export function getEditorEnabled(...args: any[]): any;
	export function getFrameLog(...args: any[]): any;
	export function getImageData(...args: any[]): any;
	export function getStartingArgs(...args: any[]): any;
	export function getStartingCommandLine(...args: any[]): any;
	export function getStaticColDebugEnabled(...args: any[]): any;
	export function sceneGetCameraFrustum(...args: any[]): any;
	export function setStaticColDebugEnabled(...args: any[]): any;
}
declare namespace Engine.Audio {
	export function createSource(...args: any[]): any;
	export function deleteSource(...args: any[]): any;
	export function getGlobalParams(...args: any[]): any;
	export function getInfo(...args: any[]): any;
	export function playLoopKTimes(...args: any[]): any;
	export function playOnce(...args: any[]): any;
	export function testPlayOnce(...args: any[]): any;
}
declare namespace Engine.Debug {
	export function addLevelLogLua(...args: any[]): any;
	export function addLevelLogLuaNoObject(...args: any[]): any;
	export function clearLevelLogs(...args: any[]): any;
	export function dumpShapeMaterials(...args: any[]): any;
	export function getLastPerformanceMetrics(...args: any[]): any;
	export function getLevelLogsLua(...args: any[]): any;
}
declare namespace Engine.Online {
	export function isAuthenticated(...args: any[]): any;
	export function openSession(...args: any[]): any;
}
declare namespace Engine.Platform {
	export function exploreFolder(...args: any[]): any;
	export function getCPUInfo(...args: any[]): any;
	export function getDirectInputSupport(...args: any[]): any;
	export function getDiskFreeSpace(...args: any[]): any;
	export function getGPUInfo(...args: any[]): any;
	export function getMemoryInfo(...args: any[]): any;
	export function getOSInfo(...args: any[]): any;
	export function getPowerInfo(...args: any[]): any;
	export function getRealMilliseconds(...args: any[]): any;
	export function getRuntime(...args: any[]): any;
	export function getXInputSupport(...args: any[]): any;
	export function isNetworkUnrestricted(...args: any[]): any;
	export function openFile(...args: any[]): any;
	export function repaintCanvas(...args: any[]): any;
	export function runBananaBench(...args: any[]): any;
	export function runDiskUsage(...args: any[]): any;
	export function runSupportTool(...args: any[]): any;
	export function startCommandListener(...args: any[]): any;
	export function taskbarSetProgress(...args: any[]): any;
	export function taskbarSetProgressState(...args: any[]): any;
}
declare namespace Engine.Profiler {
	export function popEvent(...args: any[]): any;
	export function pushEvent(...args: any[]): any;
	export function saveCapture(...args: any[]): any;
	export function startCapture(...args: any[]): any;
	export function stopCapture(...args: any[]): any;
}
declare namespace Engine.Render {
	export function getFrameId(...args: any[]): any;
	export function updateImposters(...args: any[]): any;
}
declare namespace Engine.Render.DecalMgr {
	export function addDecal(...args: any[]): any;
	export function addDecalTangent(...args: any[]): any;
	export function addDecalTangentForceId(...args: any[]): any;
	export function getClosestDecal(...args: any[]): any;
	export function getDecalInstance(...args: any[]): any;
	export function getDecalInstanceVecSize(...args: any[]): any;
	export function getSet(...args: any[]): any;
	export function notifyDecalModified(...args: any[]): any;
	export function offsetInstances(...args: any[]): any;
	export function removeDecal(...args: any[]): any;
	export function saveDecals(...args: any[]): any;
	var debugRender: any;
}
declare namespace Engine.Render.DynamicDecalMgr {
	export function addDecal(...args: any[]): any;
	export function addDecals(...args: any[]): any;
}
declare namespace Engine.Render.ParticleMgr {
	export function setEnabled(...args: any[]): any;
}
interface EventManager extends SimObject {
	postEvent(...args: any[]): any;
}
declare namespace EventManager {
}

interface FileDialog extends SimObject {
	Execute(...args: any[]): any;
}
declare namespace FileDialog {
}

interface FileObject extends SimObject {
	close(...args: any[]): any;
	isEOF(...args: any[]): any;
	openForRead(...args: any[]): any;
	openForWrite(...args: any[]): any;
	readLine(...args: any[]): any;
	writeLine(...args: any[]): any;
}
declare namespace FileObject {
}

interface Forest extends SceneObject {
	castRayRendered(...args: any[]): any;
	getData(...args: any[]): any;
	save(...args: any[]): any;
}
declare namespace Forest {
}
declare function Forest(...args: any[]): Forest;

interface ForestBrush extends SimGroup {
}
declare namespace ForestBrush {
}
declare function ForestBrush(...args: any[]): ForestBrush;

interface ForestBrushElement extends SimObject {
	getData(...args: any[]): any;
	setData(...args: any[]): any;
}
declare namespace ForestBrushElement {
}
declare function ForestBrushElement(...args: any[]): ForestBrushElement;

interface ForestBrushTool extends ForestTool {
	getHardness(...args: any[]): any;
	getPressure(...args: any[]): any;
	getSize(...args: any[]): any;
	on3DMouseDown(...args: any[]): any;
	on3DMouseDragged(...args: any[]): any;
	on3DMouseMove(...args: any[]): any;
	on3DMouseUp(...args: any[]): any;
	setHardness(...args: any[]): any;
	setPressure(...args: any[]): any;
	setSize(...args: any[]): any;
}
declare namespace ForestBrushTool {
}
declare function ForestBrushTool(...args: any[]): ForestBrushTool;

interface ForestData {
	addItem(...args: any[]): any;
	getItem(...args: any[]): any;
	getItems(...args: any[]): any;
	getItemsBox(...args: any[]): any;
	getItemsCircle(...args: any[]): any;
	getItemsFrustum(...args: any[]): any;
	removeItem(...args: any[]): any;
	updateItem(...args: any[]): any;
}
declare namespace ForestData {
}
declare function ForestData(...args: any[]): ForestData;

interface ForestEditorCtrl extends EditTSCtrl {
}
declare namespace ForestEditorCtrl {
}
declare function ForestEditorCtrl(...args: any[]): ForestEditorCtrl;

interface ForestItem {
	getData(...args: any[]): any;
	getKey(...args: any[]): any;
	getMaterialNames(...args: any[]): any;
	getObjBox(...args: any[]): any;
	getPosition(...args: any[]): any;
	getRadius(...args: any[]): any;
	getScale(...args: any[]): any;
	getSize(...args: any[]): any;
	getTransform(...args: any[]): any;
	getWorldBox(...args: any[]): any;
	setPosition(...args: any[]): any;
	setScale(...args: any[]): any;
	setTransform(...args: any[]): any;
}
declare namespace ForestItem {
}
declare function ForestItem(...args: any[]): ForestItem;

interface ForestItemData extends SimDataBlock {
	getShapeFile(...args: any[]): any;
}
declare namespace ForestItemData {
}
declare function ForestItemData(...args: any[]): ForestItemData;

interface ForestSelectionTool extends ForestTool {
	on3DMouseDown(...args: any[]): any;
	on3DMouseDragged(...args: any[]): any;
	on3DMouseMove(...args: any[]): any;
	on3DMouseUp(...args: any[]): any;
	setActiveForest(...args: any[]): any;
}
declare namespace ForestSelectionTool {
}
declare function ForestSelectionTool(...args: any[]): ForestSelectionTool;

interface ForestTool extends SimObject {
	setActiveForest(...args: any[]): any;
}
declare namespace ForestTool {
}
declare function ForestTool(...args: any[]): ForestTool;

interface ForestWindEmitter extends SceneObject {
}
declare namespace ForestWindEmitter {
}
declare function ForestWindEmitter(...args: any[]): ForestWindEmitter;

interface Frustum {
	getFarDist(...args: any[]): any;
	getNearBottom(...args: any[]): any;
	getNearDist(...args: any[]): any;
	getNearLeft(...args: any[]): any;
	getNearRight(...args: any[]): any;
	getNearTop(...args: any[]): any;
	getTransform(...args: any[]): any;
	isBoxContained(...args: any[]): any;
	isBoxOutside(...args: any[]): any;
	isOrtho(...args: any[]): any;
	isPointContained(...args: any[]): any;
}
declare namespace Frustum {
}
declare function Frustum(...args: any[]): Frustum;

interface GBitmap {
	copyRect(...args: any[]): any;
	fillColor(...args: any[]): any;
	getBytesPerPixel(...args: any[]): any;
	getColor(...args: any[]): any;
	getFormat(...args: any[]): any;
	getHeight(...args: any[]): any;
	getPtr(...args: any[]): any;
	getWidth(...args: any[]): any;
	init(...args: any[]): any;
	loadFile(...args: any[]): any;
	saveFile(...args: any[]): any;
	setColor(...args: any[]): any;
}
declare namespace GBitmap {
}
declare function GBitmap(...args: any[]): GBitmap;

interface GFXDevice {
}
declare namespace GFXDevice {
	var renderWireframe: any;
}

declare namespace GFXInit {
	export function getAdapters(...args: any[]): any;
}
interface GFXSamplerStateData extends SimObject {
}
declare namespace GFXSamplerStateData {
}

interface GFXStateBlockData extends SimObject {
}
declare namespace GFXStateBlockData {
}

interface GameBase extends SceneObject {
	getDataBlock(...args: any[]): any;
	setDataBlock(...args: any[]): any;
}
declare namespace GameBase {
}

interface GameBaseData extends SimDataBlock {
}
declare namespace GameBaseData {
}

interface GameConnection extends SimGroup {
	delete(...args: any[]): any;
	getCamera(...args: any[]): any;
	getCameraHandler(...args: any[]): any;
	setCameraHandler(...args: any[]): any;
}
declare namespace GameConnection {
	export function getCameraHandler(...args: any[]): any;
	export function setCameraHandler(...args: any[]): any;
}
declare function GameConnection(...args: any[]): GameConnection;

interface GameTSCtrl extends GuiTSCtrl {
	setEnabledControl(...args: any[]): any;
}
declare namespace GameTSCtrl {
}
declare function GameTSCtrl(...args: any[]): GameTSCtrl;

interface Gizmo extends SimObject {
}
declare namespace Gizmo {
}

interface GizmoProfile extends SimObject {
}
declare namespace GizmoProfile {
}

interface GroundCover extends SceneObject {
}
declare namespace GroundCover {
}
declare function GroundCover(...args: any[]): GroundCover;

interface GroundPlane extends SceneObject {
	postApply(...args: any[]): any;
}
declare namespace GroundPlane {
}

interface Gui3DMouseEvent extends GuiEvent {
	pos: any;
	vec: any;
}
declare namespace Gui3DMouseEvent {
}
declare function Gui3DMouseEvent(...args: any[]): Gui3DMouseEvent;

interface GuiAIPathEditorCtrl extends EditTSCtrl {
}
declare namespace GuiAIPathEditorCtrl {
}
declare function GuiAIPathEditorCtrl(...args: any[]): GuiAIPathEditorCtrl;

interface GuiArrayCtrl extends GuiControl {
}
declare namespace GuiArrayCtrl {
}
declare function GuiArrayCtrl(...args: any[]): GuiArrayCtrl;

interface GuiAutoScrollCtrl extends GuiTickCtrl {
	reset(...args: any[]): any;
}
declare namespace GuiAutoScrollCtrl {
}
declare function GuiAutoScrollCtrl(...args: any[]): GuiAutoScrollCtrl;

interface GuiBackgroundCtrl extends GuiControl {
}
declare namespace GuiBackgroundCtrl {
}
declare function GuiBackgroundCtrl(...args: any[]): GuiBackgroundCtrl;

interface GuiBeamNGDebugGraphDisplay extends GuiGraphCtrl {
}
declare namespace GuiBeamNGDebugGraphDisplay {
}
declare function GuiBeamNGDebugGraphDisplay(...args: any[]): GuiBeamNGDebugGraphDisplay;

interface GuiBitmapBorderCtrl extends GuiControl {
}
declare namespace GuiBitmapBorderCtrl {
}
declare function GuiBitmapBorderCtrl(...args: any[]): GuiBitmapBorderCtrl;

interface GuiBitmapButtonCtrl extends GuiButtonCtrl {
	setBitmap(...args: any[]): any;
}
declare namespace GuiBitmapButtonCtrl {
}
declare function GuiBitmapButtonCtrl(...args: any[]): GuiBitmapButtonCtrl;

interface GuiBitmapButtonTextCtrl extends GuiBitmapButtonCtrl {
}
declare namespace GuiBitmapButtonTextCtrl {
}
declare function GuiBitmapButtonTextCtrl(...args: any[]): GuiBitmapButtonTextCtrl;

interface GuiBitmapCtrl extends GuiControl {
	setValue(...args: any[]): any;
}
declare namespace GuiBitmapCtrl {
}
declare function GuiBitmapCtrl(...args: any[]): GuiBitmapCtrl;

interface GuiBorderButtonCtrl extends GuiButtonBaseCtrl {
}
declare namespace GuiBorderButtonCtrl {
}
declare function GuiBorderButtonCtrl(...args: any[]): GuiBorderButtonCtrl;

interface GuiBubbleTextCtrl extends GuiTextCtrl {
}
declare namespace GuiBubbleTextCtrl {
}
declare function GuiBubbleTextCtrl(...args: any[]): GuiBubbleTextCtrl;

interface GuiButtonBaseCtrl extends GuiControl {
	getText(...args: any[]): any;
	performClick(...args: any[]): any;
	resetState(...args: any[]): any;
	setStateOn(...args: any[]): any;
	setText(...args: any[]): any;
}
declare namespace GuiButtonBaseCtrl {
}
declare function GuiButtonBaseCtrl(...args: any[]): GuiButtonBaseCtrl;

interface GuiButtonCtrl extends GuiButtonBaseCtrl {
}
declare namespace GuiButtonCtrl {
}
declare function GuiButtonCtrl(...args: any[]): GuiButtonCtrl;

interface GuiCanvas extends GuiControl {
	clientToScreen(...args: any[]): any;
	cursorOff(...args: any[]): any;
	cursorOn(...args: any[]): any;
	enableCursorHideIfMouseInactive(...args: any[]): any;
	getAllVideoModes(...args: any[]): any;
	getContent(...args: any[]): any;
	getCursorPos(...args: any[]): any;
	getDesktopMode(...args: any[]): any;
	getDisplayVideoModes(...args: any[]): any;
	getExtent(...args: any[]): any;
	getMode(...args: any[]): any;
	getModeCount(...args: any[]): any;
	getPlacement(...args: any[]): any;
	getVideoMode(...args: any[]): any;
	getVideoModeStr(...args: any[]): any;
	getWindowBounds(...args: any[]): any;
	getWindowClientSize(...args: any[]): any;
	hideCursor(...args: any[]): any;
	isWindowHovered(...args: any[]): any;
	renderFront(...args: any[]): any;
	repaint(...args: any[]): any;
	repaintUI(...args: any[]): any;
	reset(...args: any[]): any;
	restorePlacement(...args: any[]): any;
	screenToClient(...args: any[]): any;
	setContent(...args: any[]): any;
	setCursor(...args: any[]): any;
	setDisplayDevice(...args: any[]): any;
	setMinExtent(...args: any[]): any;
	setVideoMode(...args: any[]): any;
	setWindowPosition(...args: any[]): any;
	setWindowTitle(...args: any[]): any;
	showCursor(...args: any[]): any;
	showWindow(...args: any[]): any;
	toggleFullscreen(...args: any[]): any;
	DisplayMode_Borderless: any;
	DisplayMode_Fullscreen: any;
	DisplayMode_Window: any;
}
declare namespace GuiCanvas {
}
declare function GuiCanvas(...args: any[]): GuiCanvas;

interface GuiCheckBoxCtrl extends GuiButtonBaseCtrl {
	isStateOn(...args: any[]): any;
	setStateOn(...args: any[]): any;
}
declare namespace GuiCheckBoxCtrl {
}
declare function GuiCheckBoxCtrl(...args: any[]): GuiCheckBoxCtrl;

interface GuiChunkedBitmapCtrl extends GuiControl {
	setBitmap(...args: any[]): any;
}
declare namespace GuiChunkedBitmapCtrl {
}
declare function GuiChunkedBitmapCtrl(...args: any[]): GuiChunkedBitmapCtrl;

interface GuiColorPickerCtrl extends GuiControl {
}
declare namespace GuiColorPickerCtrl {
}
declare function GuiColorPickerCtrl(...args: any[]): GuiColorPickerCtrl;

interface GuiConsole extends GuiArrayCtrl {
}
declare namespace GuiConsole {
}
declare function GuiConsole(...args: any[]): GuiConsole;

interface GuiConsoleEditCtrl extends GuiTextEditCtrl {
}
declare namespace GuiConsoleEditCtrl {
}
declare function GuiConsoleEditCtrl(...args: any[]): GuiConsoleEditCtrl;

interface GuiConsoleTextCtrl extends GuiControl {
}
declare namespace GuiConsoleTextCtrl {
}
declare function GuiConsoleTextCtrl(...args: any[]): GuiConsoleTextCtrl;

interface GuiContainer extends GuiControl {
}
declare namespace GuiContainer {
}
declare function GuiContainer(...args: any[]): GuiContainer;

interface GuiControl extends SimGroup {
	addGuiControl(...args: any[]): any;
	awaken(...args: any[]): any;
	clearFirstResponder(...args: any[]): any;
	controlIsChild(...args: any[]): any;
	getBounds(...args: any[]): any;
	getCenter(...args: any[]): any;
	getExtent(...args: any[]): any;
	getFirstResponder(...args: any[]): any;
	getGlobalBounds(...args: any[]): any;
	getGlobalPosition(...args: any[]): any;
	getParent(...args: any[]): any;
	getPosition(...args: any[]): any;
	getRoot(...args: any[]): any;
	isActive(...args: any[]): any;
	isAwake(...args: any[]): any;
	isFirstResponder(...args: any[]): any;
	isVisible(...args: any[]): any;
	preRender(...args: any[]): any;
	resize(...args: any[]): any;
	setActive(...args: any[]): any;
	setCanHit(...args: any[]): any;
	setCenter(...args: any[]): any;
	setControlProfile(...args: any[]): any;
	setFirstResponder(...args: any[]): any;
	setPosition(...args: any[]): any;
	setPositionGlobal(...args: any[]): any;
	setProfile(...args: any[]): any;
	setSizing(...args: any[]): any;
	setTooltipProfile(...args: any[]): any;
	setUpdate(...args: any[]): any;
	setValue(...args: any[]): any;
	setVisible(...args: any[]): any;
	sleep(...args: any[]): any;
}
declare namespace GuiControl {
}
declare function GuiControl(...args: any[]): GuiControl;

interface GuiControlArrayControl extends GuiControl {
}
declare namespace GuiControlArrayControl {
}
declare function GuiControlArrayControl(...args: any[]): GuiControlArrayControl;

interface GuiControlProfile extends SimObject {
}
declare namespace GuiControlProfile {
}

interface GuiConvexEditorCtrl extends EditTSCtrl {
}
declare namespace GuiConvexEditorCtrl {
}
declare function GuiConvexEditorCtrl(...args: any[]): GuiConvexEditorCtrl;

interface GuiCursor extends SimObject {
}
declare namespace GuiCursor {
}

interface GuiDecalEditorCtrl extends EditTSCtrl {
}
declare namespace GuiDecalEditorCtrl {
}
declare function GuiDecalEditorCtrl(...args: any[]): GuiDecalEditorCtrl;

interface GuiDecoyCtrl extends GuiControl {
}
declare namespace GuiDecoyCtrl {
}
declare function GuiDecoyCtrl(...args: any[]): GuiDecoyCtrl;

interface GuiDirectoryFileListCtrl extends GuiListBoxCtrl {
	getSelectedFile(...args: any[]): any;
	getSelectedFiles(...args: any[]): any;
	reload(...args: any[]): any;
	setFilter(...args: any[]): any;
	setPath(...args: any[]): any;
}
declare namespace GuiDirectoryFileListCtrl {
}
declare function GuiDirectoryFileListCtrl(...args: any[]): GuiDirectoryFileListCtrl;

interface GuiDragAndDropControl extends GuiControl {
	startDragging(...args: any[]): any;
}
declare namespace GuiDragAndDropControl {
}
declare function GuiDragAndDropControl(...args: any[]): GuiDragAndDropControl;

interface GuiDynamicCtrlArrayControl extends GuiControl {
	refresh(...args: any[]): any;
}
declare namespace GuiDynamicCtrlArrayControl {
}
declare function GuiDynamicCtrlArrayControl(...args: any[]): GuiDynamicCtrlArrayControl;

interface GuiEaseViewCtrl extends GuiControl {
}
declare namespace GuiEaseViewCtrl {
}
declare function GuiEaseViewCtrl(...args: any[]): GuiEaseViewCtrl;

interface GuiEditCtrl extends GuiControl {
	getSelection(...args: any[]): any;
}
declare namespace GuiEditCtrl {
}
declare function GuiEditCtrl(...args: any[]): GuiEditCtrl;

interface GuiEditorRuler extends GuiControl {
}
declare namespace GuiEditorRuler {
}
declare function GuiEditorRuler(...args: any[]): GuiEditorRuler;

interface GuiEvent {
}
declare namespace GuiEvent {
}

interface GuiFadeinBitmapCtrl extends GuiBitmapCtrl {
}
declare namespace GuiFadeinBitmapCtrl {
}
declare function GuiFadeinBitmapCtrl(...args: any[]): GuiFadeinBitmapCtrl;

interface GuiFileTreeCtrl extends GuiTreeViewCtrl {
}
declare namespace GuiFileTreeCtrl {
}
declare function GuiFileTreeCtrl(...args: any[]): GuiFileTreeCtrl;

interface GuiFilterCtrl extends GuiControl {
}
declare namespace GuiFilterCtrl {
}
declare function GuiFilterCtrl(...args: any[]): GuiFilterCtrl;

interface GuiFormCtrl extends GuiPanel {
	getMenuID(...args: any[]): any;
	setCaption(...args: any[]): any;
}
declare namespace GuiFormCtrl {
}
declare function GuiFormCtrl(...args: any[]): GuiFormCtrl;

interface GuiFrameSetCtrl extends GuiContainer {
	addColumn(...args: any[]): any;
	addRow(...args: any[]): any;
	frameBorder(...args: any[]): any;
	removeColumn(...args: any[]): any;
	removeRow(...args: any[]): any;
	setColumnOffset(...args: any[]): any;
	setRowOffset(...args: any[]): any;
	updateSizes(...args: any[]): any;
}
declare namespace GuiFrameSetCtrl {
}
declare function GuiFrameSetCtrl(...args: any[]): GuiFrameSetCtrl;

interface GuiGameListMenuCtrl extends GuiControl {
	addRow(...args: any[]): any;
	getSelectedRow(...args: any[]): any;
	setRowEnabled(...args: any[]): any;
	setRowLabel(...args: any[]): any;
	setSelected(...args: any[]): any;
}
declare namespace GuiGameListMenuCtrl {
}
declare function GuiGameListMenuCtrl(...args: any[]): GuiGameListMenuCtrl;

interface GuiGameListMenuProfile extends GuiControlProfile {
}
declare namespace GuiGameListMenuProfile {
}

interface GuiGameListOptionsCtrl extends GuiGameListMenuCtrl {
	addRow(...args: any[]): any;
	selectOption(...args: any[]): any;
	setOptions(...args: any[]): any;
}
declare namespace GuiGameListOptionsCtrl {
}
declare function GuiGameListOptionsCtrl(...args: any[]): GuiGameListOptionsCtrl;

interface GuiGameListOptionsProfile extends GuiGameListMenuProfile {
}
declare namespace GuiGameListOptionsProfile {
}

interface GuiGradientCtrl extends GuiControl {
}
declare namespace GuiGradientCtrl {
}
declare function GuiGradientCtrl(...args: any[]): GuiGradientCtrl;

interface GuiGradientSwatchCtrl extends GuiSwatchButtonCtrl {
}
declare namespace GuiGradientSwatchCtrl {
}
declare function GuiGradientSwatchCtrl(...args: any[]): GuiGradientSwatchCtrl;

interface GuiGraphCtrl extends GuiControl {
	setGraphType(...args: any[]): any;
}
declare namespace GuiGraphCtrl {
}
declare function GuiGraphCtrl(...args: any[]): GuiGraphCtrl;

interface GuiIconButtonCtrl extends GuiButtonCtrl {
	setBitmap(...args: any[]): any;
}
declare namespace GuiIconButtonCtrl {
}
declare function GuiIconButtonCtrl(...args: any[]): GuiIconButtonCtrl;

interface GuiIdleCamFadeBitmapCtrl extends GuiBitmapCtrl {
}
declare namespace GuiIdleCamFadeBitmapCtrl {
}
declare function GuiIdleCamFadeBitmapCtrl(...args: any[]): GuiIdleCamFadeBitmapCtrl;

interface GuiImageList extends SimObject {
	clear(...args: any[]): any;
	count(...args: any[]): any;
	getImage(...args: any[]): any;
	getIndex(...args: any[]): any;
	insert(...args: any[]): any;
	remove(...args: any[]): any;
}
declare namespace GuiImageList {
}

interface GuiInputCtrl extends GuiMouseEventCtrl {
}
declare namespace GuiInputCtrl {
}
declare function GuiInputCtrl(...args: any[]): GuiInputCtrl;

interface GuiInspector extends GuiStackControl {
}
declare namespace GuiInspector {
}
declare function GuiInspector(...args: any[]): GuiInspector;

interface GuiInspectorCustomField extends GuiInspectorField {
}
declare namespace GuiInspectorCustomField {
}
declare function GuiInspectorCustomField(...args: any[]): GuiInspectorCustomField;

interface GuiInspectorDatablockField extends GuiInspectorTypeMenuBase {
}
declare namespace GuiInspectorDatablockField {
}
declare function GuiInspectorDatablockField(...args: any[]): GuiInspectorDatablockField;

interface GuiInspectorDynamicField extends GuiInspectorField {
}
declare namespace GuiInspectorDynamicField {
}
declare function GuiInspectorDynamicField(...args: any[]): GuiInspectorDynamicField;

interface GuiInspectorDynamicGroup extends GuiInspectorGroup {
}
declare namespace GuiInspectorDynamicGroup {
}
declare function GuiInspectorDynamicGroup(...args: any[]): GuiInspectorDynamicGroup;

interface GuiInspectorField extends GuiControl {
}
declare namespace GuiInspectorField {
}
declare function GuiInspectorField(...args: any[]): GuiInspectorField;

interface GuiInspectorGroup extends GuiRolloutCtrl {
}
declare namespace GuiInspectorGroup {
}
declare function GuiInspectorGroup(...args: any[]): GuiInspectorGroup;

interface GuiInspectorTypeBitMask32 extends GuiInspectorField {
}
declare namespace GuiInspectorTypeBitMask32 {
}
declare function GuiInspectorTypeBitMask32(...args: any[]): GuiInspectorTypeBitMask32;

interface GuiInspectorTypeBitMask32Helper extends GuiInspectorField {
}
declare namespace GuiInspectorTypeBitMask32Helper {
}
declare function GuiInspectorTypeBitMask32Helper(...args: any[]): GuiInspectorTypeBitMask32Helper;

interface GuiInspectorTypeCheckBox extends GuiInspectorField {
}
declare namespace GuiInspectorTypeCheckBox {
}
declare function GuiInspectorTypeCheckBox(...args: any[]): GuiInspectorTypeCheckBox;

interface GuiInspectorTypeColor extends GuiInspectorField {
}
declare namespace GuiInspectorTypeColor {
}
declare function GuiInspectorTypeColor(...args: any[]): GuiInspectorTypeColor;

interface GuiInspectorTypeColorF extends GuiInspectorTypeColor {
}
declare namespace GuiInspectorTypeColorF {
}
declare function GuiInspectorTypeColorF(...args: any[]): GuiInspectorTypeColorF;

interface GuiInspectorTypeColorI extends GuiInspectorTypeColor {
}
declare namespace GuiInspectorTypeColorI {
}
declare function GuiInspectorTypeColorI(...args: any[]): GuiInspectorTypeColorI;

interface GuiInspectorTypeCommand extends GuiInspectorField {
}
declare namespace GuiInspectorTypeCommand {
}
declare function GuiInspectorTypeCommand(...args: any[]): GuiInspectorTypeCommand;

interface GuiInspectorTypeCubemapName extends GuiInspectorTypeMenuBase {
}
declare namespace GuiInspectorTypeCubemapName {
}
declare function GuiInspectorTypeCubemapName(...args: any[]): GuiInspectorTypeCubemapName;

interface GuiInspectorTypeEaseF extends GuiInspectorField {
}
declare namespace GuiInspectorTypeEaseF {
}
declare function GuiInspectorTypeEaseF(...args: any[]): GuiInspectorTypeEaseF;

interface GuiInspectorTypeEnum extends GuiInspectorTypeMenuBase {
}
declare namespace GuiInspectorTypeEnum {
}
declare function GuiInspectorTypeEnum(...args: any[]): GuiInspectorTypeEnum;

interface GuiInspectorTypeFileName extends GuiInspectorField {
}
declare namespace GuiInspectorTypeFileName {
}
declare function GuiInspectorTypeFileName(...args: any[]): GuiInspectorTypeFileName;

interface GuiInspectorTypeGuiProfile extends GuiInspectorTypeMenuBase {
}
declare namespace GuiInspectorTypeGuiProfile {
}
declare function GuiInspectorTypeGuiProfile(...args: any[]): GuiInspectorTypeGuiProfile;

interface GuiInspectorTypeImageFileName extends GuiInspectorTypeFileName {
}
declare namespace GuiInspectorTypeImageFileName {
}
declare function GuiInspectorTypeImageFileName(...args: any[]): GuiInspectorTypeImageFileName;

interface GuiInspectorTypeMaterialName extends GuiInspectorField {
}
declare namespace GuiInspectorTypeMaterialName {
}
declare function GuiInspectorTypeMaterialName(...args: any[]): GuiInspectorTypeMaterialName;

interface GuiInspectorTypeMenuBase extends GuiInspectorField {
}
declare namespace GuiInspectorTypeMenuBase {
}
declare function GuiInspectorTypeMenuBase(...args: any[]): GuiInspectorTypeMenuBase;

interface GuiInspectorTypeName extends GuiInspectorField {
}
declare namespace GuiInspectorTypeName {
}
declare function GuiInspectorTypeName(...args: any[]): GuiInspectorTypeName;

interface GuiInspectorTypeObjectAnnotation extends GuiInspectorTypeMenuBase {
}
declare namespace GuiInspectorTypeObjectAnnotation {
}
declare function GuiInspectorTypeObjectAnnotation(...args: any[]): GuiInspectorTypeObjectAnnotation;

interface GuiInspectorTypePoint34 extends GuiInspectorField {
}
declare namespace GuiInspectorTypePoint34 {
}
declare function GuiInspectorTypePoint34(...args: any[]): GuiInspectorTypePoint34;

interface GuiInspectorTypePrefabFilename extends GuiInspectorTypeFileName {
}
declare namespace GuiInspectorTypePrefabFilename {
}
declare function GuiInspectorTypePrefabFilename(...args: any[]): GuiInspectorTypePrefabFilename;

interface GuiInspectorTypeRectUV extends GuiInspectorField {
}
declare namespace GuiInspectorTypeRectUV {
}
declare function GuiInspectorTypeRectUV(...args: any[]): GuiInspectorTypeRectUV;

interface GuiInspectorTypeS32 extends GuiInspectorField {
}
declare namespace GuiInspectorTypeS32 {
}
declare function GuiInspectorTypeS32(...args: any[]): GuiInspectorTypeS32;

interface GuiInspectorTypeSFXAmbienceName extends GuiInspectorDatablockField {
}
declare namespace GuiInspectorTypeSFXAmbienceName {
}
declare function GuiInspectorTypeSFXAmbienceName(...args: any[]): GuiInspectorTypeSFXAmbienceName;

interface GuiInspectorTypeSFXDescriptionName extends GuiInspectorDatablockField {
}
declare namespace GuiInspectorTypeSFXDescriptionName {
}
declare function GuiInspectorTypeSFXDescriptionName(...args: any[]): GuiInspectorTypeSFXDescriptionName;

interface GuiInspectorTypeSFXEnvironmentName extends GuiInspectorDatablockField {
}
declare namespace GuiInspectorTypeSFXEnvironmentName {
}
declare function GuiInspectorTypeSFXEnvironmentName(...args: any[]): GuiInspectorTypeSFXEnvironmentName;

interface GuiInspectorTypeSFXParameterName extends GuiInspectorTypeMenuBase {
}
declare namespace GuiInspectorTypeSFXParameterName {
}
declare function GuiInspectorTypeSFXParameterName(...args: any[]): GuiInspectorTypeSFXParameterName;

interface GuiInspectorTypeSFXSourceName extends GuiInspectorTypeMenuBase {
}
declare namespace GuiInspectorTypeSFXSourceName {
}
declare function GuiInspectorTypeSFXSourceName(...args: any[]): GuiInspectorTypeSFXSourceName;

interface GuiInspectorTypeSFXStateName extends GuiInspectorTypeMenuBase {
}
declare namespace GuiInspectorTypeSFXStateName {
}
declare function GuiInspectorTypeSFXStateName(...args: any[]): GuiInspectorTypeSFXStateName;

interface GuiInspectorTypeSFXTrackName extends GuiInspectorDatablockField {
}
declare namespace GuiInspectorTypeSFXTrackName {
}
declare function GuiInspectorTypeSFXTrackName(...args: any[]): GuiInspectorTypeSFXTrackName;

interface GuiInspectorTypeShapeFilename extends GuiInspectorTypeFileName {
}
declare namespace GuiInspectorTypeShapeFilename {
}
declare function GuiInspectorTypeShapeFilename(...args: any[]): GuiInspectorTypeShapeFilename;

interface GuiInspectorTypeTerrainMaterialIndex extends GuiInspectorTypeMaterialName {
}
declare namespace GuiInspectorTypeTerrainMaterialIndex {
}
declare function GuiInspectorTypeTerrainMaterialIndex(...args: any[]): GuiInspectorTypeTerrainMaterialIndex;

interface GuiInspectorTypeTerrainMaterialName extends GuiInspectorTypeMaterialName {
}
declare namespace GuiInspectorTypeTerrainMaterialName {
}
declare function GuiInspectorTypeTerrainMaterialName(...args: any[]): GuiInspectorTypeTerrainMaterialName;

interface GuiInspectorVariableField extends GuiInspectorField {
}
declare namespace GuiInspectorVariableField {
}
declare function GuiInspectorVariableField(...args: any[]): GuiInspectorVariableField;

interface GuiInspectorVariableGroup extends GuiInspectorGroup {
}
declare namespace GuiInspectorVariableGroup {
}
declare function GuiInspectorVariableGroup(...args: any[]): GuiInspectorVariableGroup;

interface GuiListBoxCtrl extends GuiControl {
	addFilteredItem(...args: any[]): any;
	addItem(...args: any[]): any;
	clearItemColor(...args: any[]): any;
	clearItems(...args: any[]): any;
	clearSelection(...args: any[]): any;
	deleteItem(...args: any[]): any;
	doMirror(...args: any[]): any;
	findItemText(...args: any[]): any;
	getItemCount(...args: any[]): any;
	getItemObject(...args: any[]): any;
	getItemText(...args: any[]): any;
	getSelectedItem(...args: any[]): any;
	getSelectedItems(...args: any[]): any;
	insertItem(...args: any[]): any;
	removeFilteredItem(...args: any[]): any;
	setCurSel(...args: any[]): any;
	setCurSelRange(...args: any[]): any;
	setItemColor(...args: any[]): any;
	setItemText(...args: any[]): any;
	setItemTooltip(...args: any[]): any;
	setMultipleSelection(...args: any[]): any;
	setSelected(...args: any[]): any;
}
declare namespace GuiListBoxCtrl {
}
declare function GuiListBoxCtrl(...args: any[]): GuiListBoxCtrl;

interface GuiMLTextCtrl extends GuiControl {
	addText(...args: any[]): any;
	forceReflow(...args: any[]): any;
	getText(...args: any[]): any;
	scrollToBottom(...args: any[]): any;
	scrollToTag(...args: any[]): any;
	scrollToTop(...args: any[]): any;
	setAlpha(...args: any[]): any;
	setCursorPosition(...args: any[]): any;
	setText(...args: any[]): any;
}
declare namespace GuiMLTextCtrl {
}
declare function GuiMLTextCtrl(...args: any[]): GuiMLTextCtrl;

interface GuiMLTextEditCtrl extends GuiMLTextCtrl {
}
declare namespace GuiMLTextEditCtrl {
}
declare function GuiMLTextEditCtrl(...args: any[]): GuiMLTextEditCtrl;

interface GuiMaterialCtrl extends GuiContainer {
}
declare namespace GuiMaterialCtrl {
}
declare function GuiMaterialCtrl(...args: any[]): GuiMaterialCtrl;

interface GuiMaterialPreview extends GuiTSCtrl {
	deleteModel(...args: any[]): any;
	reset(...args: any[]): any;
	setAmbientLightColor(...args: any[]): any;
	setLightColor(...args: any[]): any;
	setModel(...args: any[]): any;
	setOrbitDistance(...args: any[]): any;
}
declare namespace GuiMaterialPreview {
}
declare function GuiMaterialPreview(...args: any[]): GuiMaterialPreview;

interface GuiMenuBar extends GuiTickCtrl {
	addMenu(...args: any[]): any;
	addMenuItem(...args: any[]): any;
	addSubmenuItem(...args: any[]): any;
	clearMenuItems(...args: any[]): any;
	clearMenus(...args: any[]): any;
	clearSubmenuItems(...args: any[]): any;
	removeMenu(...args: any[]): any;
	removeMenuItem(...args: any[]): any;
	setCheckmarkBitmapIndex(...args: any[]): any;
	setMenuBitmapIndex(...args: any[]): any;
	setMenuItemBitmap(...args: any[]): any;
	setMenuItemChecked(...args: any[]): any;
	setMenuItemEnable(...args: any[]): any;
	setMenuItemSubmenuState(...args: any[]): any;
	setMenuItemText(...args: any[]): any;
	setMenuItemVisible(...args: any[]): any;
	setMenuMargins(...args: any[]): any;
	setMenuText(...args: any[]): any;
	setMenuVisible(...args: any[]): any;
	setSubmenuItemChecked(...args: any[]): any;
}
declare namespace GuiMenuBar {
}
declare function GuiMenuBar(...args: any[]): GuiMenuBar;

interface GuiMeshRoadEditorCtrl extends EditTSCtrl {
}
declare namespace GuiMeshRoadEditorCtrl {
}
declare function GuiMeshRoadEditorCtrl(...args: any[]): GuiMeshRoadEditorCtrl;

interface GuiMouseEventCtrl extends GuiControl {
}
declare namespace GuiMouseEventCtrl {
}
declare function GuiMouseEventCtrl(...args: any[]): GuiMouseEventCtrl;

interface GuiNavEditorCtrl extends EditTSCtrl {
	buildTile(...args: any[]): any;
	deleteLink(...args: any[]): any;
	deselect(...args: any[]): any;
	getMesh(...args: any[]): any;
	getPlayer(...args: any[]): any;
	selectMesh(...args: any[]): any;
	setLinkFlags(...args: any[]): any;
	spawnPlayer(...args: any[]): any;
}
declare namespace GuiNavEditorCtrl {
}
declare function GuiNavEditorCtrl(...args: any[]): GuiNavEditorCtrl;

interface GuiNoMouseCtrl extends GuiControl {
}
declare namespace GuiNoMouseCtrl {
}
declare function GuiNoMouseCtrl(...args: any[]): GuiNoMouseCtrl;

interface GuiObjectView extends GuiTSCtrl {
	getModel(...args: any[]): any;
	setLightAmbient(...args: any[]): any;
	setLightColor(...args: any[]): any;
	setLightDirection(...args: any[]): any;
	setModel(...args: any[]): any;
	setOrbitDistance(...args: any[]): any;
	setSeq(...args: any[]): any;
	setSkin(...args: any[]): any;
}
declare namespace GuiObjectView {
}
declare function GuiObjectView(...args: any[]): GuiObjectView;

interface GuiPaneControl extends GuiControl {
	setCollapsed(...args: any[]): any;
}
declare namespace GuiPaneControl {
}
declare function GuiPaneControl(...args: any[]): GuiPaneControl;

interface GuiPanel extends GuiContainer {
}
declare namespace GuiPanel {
}
declare function GuiPanel(...args: any[]): GuiPanel;

interface GuiParticleGraphCtrl extends GuiControl {
}
declare namespace GuiParticleGraphCtrl {
}
declare function GuiParticleGraphCtrl(...args: any[]): GuiParticleGraphCtrl;

interface GuiPopUpMenuCtrl extends GuiTextCtrl {
}
declare namespace GuiPopUpMenuCtrl {
}
declare function GuiPopUpMenuCtrl(...args: any[]): GuiPopUpMenuCtrl;

interface GuiPopUpMenuCtrlEx extends GuiTextCtrl {
	addCategory(...args: any[]): any;
	clear(...args: any[]): any;
	getSelected(...args: any[]): any;
	getText(...args: any[]): any;
	getTextById(...args: any[]): any;
	setNoneSelected(...args: any[]): any;
	setText(...args: any[]): any;
	sort(...args: any[]): any;
	sortID(...args: any[]): any;
}
declare namespace GuiPopUpMenuCtrlEx {
}
declare function GuiPopUpMenuCtrlEx(...args: any[]): GuiPopUpMenuCtrlEx;

interface GuiProgressBitmapCtrl extends GuiTextCtrl {
	setBitmap(...args: any[]): any;
}
declare namespace GuiProgressBitmapCtrl {
}
declare function GuiProgressBitmapCtrl(...args: any[]): GuiProgressBitmapCtrl;

interface GuiProgressCtrl extends GuiTextCtrl {
}
declare namespace GuiProgressCtrl {
}
declare function GuiProgressCtrl(...args: any[]): GuiProgressCtrl;

interface GuiRadioCtrl extends GuiCheckBoxCtrl {
}
declare namespace GuiRadioCtrl {
}
declare function GuiRadioCtrl(...args: any[]): GuiRadioCtrl;

interface GuiRectHandles extends GuiControl {
}
declare namespace GuiRectHandles {
}
declare function GuiRectHandles(...args: any[]): GuiRectHandles;

interface GuiRiverEditorCtrl extends EditTSCtrl {
}
declare namespace GuiRiverEditorCtrl {
}
declare function GuiRiverEditorCtrl(...args: any[]): GuiRiverEditorCtrl;

interface GuiRoadEditorCtrl extends EditTSCtrl {
}
declare namespace GuiRoadEditorCtrl {
}
declare function GuiRoadEditorCtrl(...args: any[]): GuiRoadEditorCtrl;

interface GuiRolloutCtrl extends GuiControl {
	collapse(...args: any[]): any;
	expand(...args: any[]): any;
	isExpanded(...args: any[]): any;
	sizeToContents(...args: any[]): any;
	toggleCollapse(...args: any[]): any;
	toggleExpanded(...args: any[]): any;
}
declare namespace GuiRolloutCtrl {
}
declare function GuiRolloutCtrl(...args: any[]): GuiRolloutCtrl;

interface GuiScriptNotifyCtrl extends GuiControl {
}
declare namespace GuiScriptNotifyCtrl {
}
declare function GuiScriptNotifyCtrl(...args: any[]): GuiScriptNotifyCtrl;

interface GuiScrollCtrl extends GuiContainer {
	computeSizes(...args: any[]): any;
	scrollToBottom(...args: any[]): any;
	scrollToObject(...args: any[]): any;
	scrollToTop(...args: any[]): any;
	setScrollPosition(...args: any[]): any;
}
declare namespace GuiScrollCtrl {
}
declare function GuiScrollCtrl(...args: any[]): GuiScrollCtrl;

interface GuiSeparatorCtrl extends GuiControl {
}
declare namespace GuiSeparatorCtrl {
}
declare function GuiSeparatorCtrl(...args: any[]): GuiSeparatorCtrl;

interface GuiShapeEdPreview extends EditTSCtrl {
	addThread(...args: any[]): any;
	computeShapeBounds(...args: any[]): any;
	exportToCollada(...args: any[]): any;
	fitToShape(...args: any[]): any;
	getMeshHidden(...args: any[]): any;
	getThreadCount(...args: any[]): any;
	getThreadSequence(...args: any[]): any;
	refreshShape(...args: any[]): any;
	refreshThreadSequences(...args: any[]): any;
	removeThread(...args: any[]): any;
	setAllMeshesHidden(...args: any[]): any;
	setMeshHidden(...args: any[]): any;
	setModel(...args: any[]): any;
	setOrbitPos(...args: any[]): any;
	setThreadSequence(...args: any[]): any;
	setTimeScale(...args: any[]): any;
	updateNodeTransforms(...args: any[]): any;
}
declare namespace GuiShapeEdPreview {
}
declare function GuiShapeEdPreview(...args: any[]): GuiShapeEdPreview;

interface GuiSliderCtrl extends GuiControl {
	getValue(...args: any[]): any;
	isThumbBeingDragged(...args: any[]): any;
	setValue(...args: any[]): any;
}
declare namespace GuiSliderCtrl {
}
declare function GuiSliderCtrl(...args: any[]): GuiSliderCtrl;

interface GuiSplitContainer extends GuiContainer {
}
declare namespace GuiSplitContainer {
}
declare function GuiSplitContainer(...args: any[]): GuiSplitContainer;

interface GuiStackControl extends GuiControl {
	freeze(...args: any[]): any;
	isFrozen(...args: any[]): any;
	updateStack(...args: any[]): any;
}
declare namespace GuiStackControl {
}
declare function GuiStackControl(...args: any[]): GuiStackControl;

interface GuiSwatchButtonCtrl extends GuiButtonBaseCtrl {
	setColor(...args: any[]): any;
}
declare namespace GuiSwatchButtonCtrl {
}
declare function GuiSwatchButtonCtrl(...args: any[]): GuiSwatchButtonCtrl;

interface GuiTSCtrl extends GuiContainer {
	project(...args: any[]): any;
	unproject(...args: any[]): any;
}
declare namespace GuiTSCtrl {
}
declare function GuiTSCtrl(...args: any[]): GuiTSCtrl;

interface GuiTabBookCtrl extends GuiContainer {
	addPage(...args: any[]): any;
	getSelectedPage(...args: any[]): any;
	selectPage(...args: any[]): any;
}
declare namespace GuiTabBookCtrl {
}
declare function GuiTabBookCtrl(...args: any[]): GuiTabBookCtrl;

interface GuiTabPageCtrl extends GuiTextCtrl {
	select(...args: any[]): any;
}
declare namespace GuiTabPageCtrl {
}
declare function GuiTabPageCtrl(...args: any[]): GuiTabPageCtrl;

interface GuiTerrPreviewCtrl extends GuiControl {
}
declare namespace GuiTerrPreviewCtrl {
}
declare function GuiTerrPreviewCtrl(...args: any[]): GuiTerrPreviewCtrl;

interface GuiTextCtrl extends GuiContainer {
	setText(...args: any[]): any;
}
declare namespace GuiTextCtrl {
}
declare function GuiTextCtrl(...args: any[]): GuiTextCtrl;

interface GuiTextEditCtrl extends GuiTextCtrl {
	clearSelectedText(...args: any[]): any;
	forceValidateText(...args: any[]): any;
	getCursorPos(...args: any[]): any;
	getText(...args: any[]): any;
	selectAllText(...args: any[]): any;
	setCursorPos(...args: any[]): any;
	setText(...args: any[]): any;
}
declare namespace GuiTextEditCtrl {
}
declare function GuiTextEditCtrl(...args: any[]): GuiTextEditCtrl;

interface GuiTextEditSliderBitmapCtrl extends GuiTextEditCtrl {
}
declare namespace GuiTextEditSliderBitmapCtrl {
}
declare function GuiTextEditSliderBitmapCtrl(...args: any[]): GuiTextEditSliderBitmapCtrl;

interface GuiTextEditSliderCtrl extends GuiTextEditCtrl {
}
declare namespace GuiTextEditSliderCtrl {
}
declare function GuiTextEditSliderCtrl(...args: any[]): GuiTextEditSliderCtrl;

interface GuiTextListCtrl extends GuiArrayCtrl {
	addRow(...args: any[]): any;
	clear(...args: any[]): any;
	clearSelection(...args: any[]): any;
	findTextIndex(...args: any[]): any;
	getRowId(...args: any[]): any;
	getRowNumById(...args: any[]): any;
	getRowText(...args: any[]): any;
	getRowTextById(...args: any[]): any;
	getSelectedId(...args: any[]): any;
	getSelectedRow(...args: any[]): any;
	removeRow(...args: any[]): any;
	removeRowById(...args: any[]): any;
	rowCount(...args: any[]): any;
	scrollVisible(...args: any[]): any;
	setRowActive(...args: any[]): any;
	setRowById(...args: any[]): any;
	setSelectedById(...args: any[]): any;
	setSelectedRow(...args: any[]): any;
	sort(...args: any[]): any;
	sortNumerical(...args: any[]): any;
}
declare namespace GuiTextListCtrl {
}
declare function GuiTextListCtrl(...args: any[]): GuiTextListCtrl;

interface GuiTextureCtrl extends GuiControl {
}
declare namespace GuiTextureCtrl {
}
declare function GuiTextureCtrl(...args: any[]): GuiTextureCtrl;

interface GuiTheoraCtrl extends GuiControl {
	pause(...args: any[]): any;
	play(...args: any[]): any;
	setFile(...args: any[]): any;
	stop(...args: any[]): any;
}
declare namespace GuiTheoraCtrl {
}
declare function GuiTheoraCtrl(...args: any[]): GuiTheoraCtrl;

interface GuiTickCtrl extends GuiControl {
}
declare namespace GuiTickCtrl {
}
declare function GuiTickCtrl(...args: any[]): GuiTickCtrl;

interface GuiToggleButtonCtrl extends GuiButtonCtrl {
}
declare namespace GuiToggleButtonCtrl {
}
declare function GuiToggleButtonCtrl(...args: any[]): GuiToggleButtonCtrl;

interface GuiToolboxButtonCtrl extends GuiButtonCtrl {
}
declare namespace GuiToolboxButtonCtrl {
}
declare function GuiToolboxButtonCtrl(...args: any[]): GuiToolboxButtonCtrl;

interface GuiTreeViewCtrl extends GuiArrayCtrl {
	addSelectionItemId(...args: any[]): any;
	addSelectionObjectId(...args: any[]): any;
	clearFilterText(...args: any[]): any;
	clearSelection(...args: any[]): any;
	deleteSelection(...args: any[]): any;
	findItemByName(...args: any[]): any;
	findItemByValue(...args: any[]): any;
	getFilterText(...args: any[]): any;
	hideSelection(...args: any[]): any;
	insertItem(...args: any[]): any;
	isItemSelected(...args: any[]): any;
	lockSelection(...args: any[]): any;
	setFilterText(...args: any[]): any;
	toggleHideSelection(...args: any[]): any;
	toggleLockSelection(...args: any[]): any;
}
declare namespace GuiTreeViewCtrl {
}
declare function GuiTreeViewCtrl(...args: any[]): GuiTreeViewCtrl;

interface GuiVariableInspector extends GuiInspector {
}
declare namespace GuiVariableInspector {
}
declare function GuiVariableInspector(...args: any[]): GuiVariableInspector;

interface GuiWindowCollapseCtrl extends GuiWindowCtrl {
}
declare namespace GuiWindowCollapseCtrl {
}
declare function GuiWindowCollapseCtrl(...args: any[]): GuiWindowCollapseCtrl;

interface GuiWindowCtrl extends GuiContainer {
	attachTo(...args: any[]): any;
	selectWindow(...args: any[]): any;
	setCollapseGroup(...args: any[]): any;
	setText(...args: any[]): any;
	toggleCollapseGroup(...args: any[]): any;
}
declare namespace GuiWindowCtrl {
}
declare function GuiWindowCtrl(...args: any[]): GuiWindowCtrl;

interface InspectorFieldUndoAction extends UndoAction {
}
declare namespace InspectorFieldUndoAction {
}

interface LevelInfo extends SimObject {
	getTemperatureCurveC(...args: any[]): any;
	setTemperatureCurveC(...args: any[]): any;
}
declare namespace LevelInfo {
}
declare function LevelInfo(...args: any[]): LevelInfo;

interface LevelLogItem {
	filename: any;
	lineNumber: any;
	logLevel: any;
	message: any;
	object: any;
	origin: any;
	uniqueErrorCode: any;
}
declare namespace LevelLogItem {
}

interface LightAnimData extends SimDataBlock {
}
declare namespace LightAnimData {
}

interface LightBase extends SceneObject {
	getLightEnabled(...args: any[]): any;
	setLightEnabled(...args: any[]): any;
}
declare namespace LightBase {
}

interface LightDescription extends SimDataBlock {
	apply(...args: any[]): any;
}
declare namespace LightDescription {
}

interface LightFlareData extends SimDataBlock {
	apply(...args: any[]): any;
}
declare namespace LightFlareData {
}

interface LightShadowMap {
}
declare namespace LightShadowMap {
	var renderFrustums: any;
}

interface LoadingScreenScopedCallbackContext {
	update(...args: any[]): any;
}
declare namespace LoadingScreenScopedCallbackContext {
}

interface LogSink {
	close(...args: any[]): any;
	open(...args: any[]): any;
}
declare namespace LogSink {
}
declare function LogSink(...args: any[]): LogSink;

interface MECreateUndoAction extends UndoAction {
}
declare namespace MECreateUndoAction {
}

interface MEDeleteUndoAction extends UndoAction {
}
declare namespace MEDeleteUndoAction {
}

interface Marker extends SceneObject {
}
declare namespace Marker {
}
declare function Marker(...args: any[]): Marker;

interface Material extends BaseMaterial {
	dumpInstances(...args: any[]): any;
	flush(...args: any[]): any;
	getAnimFlags(...args: any[]): any;
	getFilename(...args: any[]): any;
	getPath(...args: any[]): any;
	isAutoGenerated(...args: any[]): any;
	reload(...args: any[]): any;
	setAutoGenerated(...args: any[]): any;
	setFilename(...args: any[]): any;
}
declare namespace Material {
}
declare function Material(...args: any[]): Material;

interface MatrixF {
	createOrientFromDir(...args: any[]): any;
	getColumn(...args: any[]): any;
	inverse(...args: any[]): any;
	mul(...args: any[]): any;
	mulP3F(...args: any[]): any;
	mulP4F(...args: any[]): any;
	mulV(...args: any[]): any;
	normalize(...args: any[]): any;
	scale(...args: any[]): any;
	set(...args: any[]): any;
	setColumn(...args: any[]): any;
	setFromEuler(...args: any[]): any;
	setPosition(...args: any[]): any;
	toEuler(...args: any[]): any;
	transformP3F(...args: any[]): any;
}
declare namespace MatrixF {
}
declare function MatrixF(...args: any[]): MatrixF;

interface MenuBar extends SimSet {
}
declare namespace MenuBar {
}
declare function MenuBar(...args: any[]): MenuBar;

interface MeshRoad extends SceneObject {
	collideRay(...args: any[]): any;
	deleteNode(...args: any[]): any;
	getBottomLeftEdgePosition(...args: any[]): any;
	getBottomRightEdgePosition(...args: any[]): any;
	getEdgeCount(...args: any[]): any;
	getNodeCount(...args: any[]): any;
	getNodeDepth(...args: any[]): any;
	getNodeNormal(...args: any[]): any;
	getNodePosition(...args: any[]): any;
	getNodeTransform(...args: any[]): any;
	getNodeWidth(...args: any[]): any;
	getTopLeftEdgePosition(...args: any[]): any;
	getTopMiddleEdgePosition(...args: any[]): any;
	getTopRightEdgePosition(...args: any[]): any;
	insertNode(...args: any[]): any;
	postApply(...args: any[]): any;
	regenerate(...args: any[]): any;
	setNodeDepth(...args: any[]): any;
	setNodeNormal(...args: any[]): any;
	setNodePosition(...args: any[]): any;
	setNodeWidth(...args: any[]): any;
}
declare namespace MeshRoad {
}
declare function MeshRoad(...args: any[]): MeshRoad;

interface Message extends SimObject {
}
declare namespace Message {
}

interface MessageForwarder extends ScriptMsgListener {
}
declare namespace MessageForwarder {
}

interface MissionMarker extends ShapeBase {
}
declare namespace MissionMarker {
}
declare function MissionMarker(...args: any[]): MissionMarker;

interface MissionMarkerData extends ShapeBaseData {
}
declare namespace MissionMarkerData {
}

interface MoveManager {
}
declare namespace MoveManager {
	var absXAxis: any;
	var absYAxis: any;
	var absZAxis: any;
	var backward: any;
	var down: any;
	var forward: any;
	var left: any;
	var pitchDown: any;
	var pitchRelative: any;
	var pitchUp: any;
	var right: any;
	var rollLeft: any;
	var rollRelative: any;
	var rollRight: any;
	var up: any;
	var yawLeft: any;
	var yawRelative: any;
	var yawRight: any;
	var zoomIn: any;
	var zoomOut: any;
}

interface NavMesh extends SceneObject {
	addLink(...args: any[]): any;
	build(...args: any[]): any;
	buildLinks(...args: any[]): any;
	buildTiles(...args: any[]): any;
	cancelBuild(...args: any[]): any;
	createCoverPoints(...args: any[]): any;
	deleteCoverPoints(...args: any[]): any;
	deleteLink(...args: any[]): any;
	deleteLinks(...args: any[]): any;
	getLink(...args: any[]): any;
	getLinkCount(...args: any[]): any;
	getLinkEnd(...args: any[]): any;
	getLinkFlags(...args: any[]): any;
	getLinkStart(...args: any[]): any;
	load(...args: any[]): any;
	save(...args: any[]): any;
	setLinkFlags(...args: any[]): any;
}
declare namespace NavMesh {
}

interface NavPath extends SceneObject {
	getFlags(...args: any[]): any;
	getLength(...args: any[]): any;
	getNode(...args: any[]): any;
	onNavMeshUpdate(...args: any[]): any;
	onNavMeshUpdateBox(...args: any[]): any;
	plan(...args: any[]): any;
	size(...args: any[]): any;
}
declare namespace NavPath {
}

interface NewWorldEditor {
	drawClosestObjectIcons(...args: any[]): any;
	initialize(...args: any[]): any;
	shutdown(...args: any[]): any;
}
declare namespace NewWorldEditor {
}
declare function NewWorldEditor(...args: any[]): NewWorldEditor;

interface OcclusionVolume extends SceneObject {
}
declare namespace OcclusionVolume {
}

interface OpenFileDialog extends FileDialog {
}
declare namespace OpenFileDialog {
}

interface OpenFolderDialog extends OpenFileDialog {
}
declare namespace OpenFolderDialog {
}

interface OrientedBox3F {
	getAxis(...args: any[]): any;
	getBoxTransform(...args: any[]): any;
	getCenter(...args: any[]): any;
	getHalfExtents(...args: any[]): any;
	getMatrix(...args: any[]): any;
	getPoint(...args: any[]): any;
	isContained(...args: any[]): any;
	set(...args: any[]): any;
}
declare namespace OrientedBox3F {
}
declare function OrientedBox3F(...args: any[]): OrientedBox3F;

interface ParticleData extends SimDataBlock {
	reload(...args: any[]): any;
}
declare namespace ParticleData {
}

interface ParticleEmitter extends GameBase {
}
declare namespace ParticleEmitter {
}

interface ParticleEmitterData extends GameBaseData {
	reload(...args: any[]): any;
}
declare namespace ParticleEmitterData {
}

interface ParticleEmitterNode extends GameBase {
	setActive(...args: any[]): any;
	setEmitterDataBlock(...args: any[]): any;
}
declare namespace ParticleEmitterNode {
}
declare function ParticleEmitterNode(...args: any[]): ParticleEmitterNode;

interface ParticleEmitterNodeData extends GameBaseData {
}
declare namespace ParticleEmitterNodeData {
}

interface PersistenceManager extends SimObject {
	isDirty(...args: any[]): any;
	removeObjectFromFileLua(...args: any[]): any;
	saveDirty(...args: any[]): any;
	saveDirtyNewFormat(...args: any[]): any;
	saveDirtyObject(...args: any[]): any;
	setDirty(...args: any[]): any;
}
declare namespace PersistenceManager {
}
declare function PersistenceManager(...args: any[]): PersistenceManager;

interface PhysicsDebris extends GameBase {
}
declare namespace PhysicsDebris {
}

interface PhysicsDebrisData extends GameBaseData {
}
declare namespace PhysicsDebrisData {
}

interface Player extends ShapeBase {
	allowAllPoses(...args: any[]): any;
	allowCrouching(...args: any[]): any;
	allowJetJumping(...args: any[]): any;
	allowJumping(...args: any[]): any;
	allowProne(...args: any[]): any;
	allowSprinting(...args: any[]): any;
	allowSwimming(...args: any[]): any;
	checkDismountPoint(...args: any[]): any;
	getNumDeathAnimations(...args: any[]): any;
	getPose(...args: any[]): any;
	getState(...args: any[]): any;
	setActionThread(...args: any[]): any;
	setArmThread(...args: any[]): any;
}
declare namespace Player {
}

interface PlayerData extends ShapeBaseData {
}
declare namespace PlayerData {
}

interface Point2F {
	x: any;
	y: any;
}
declare namespace Point2F {
}
declare function Point2F(...args: any[]): Point2F;

interface Point2I {
	x: any;
	y: any;
}
declare namespace Point2I {
}
declare function Point2I(...args: any[]): Point2I;

interface Point3F {
	asPoint2F(...args: any[]): any;
	getAxis(...args: any[]): any;
	len(...args: any[]): any;
	lenSquared(...args: any[]): any;
	neg(...args: any[]): any;
	normalize(...args: any[]): any;
	normalizeSafe(...args: any[]): any;
	scale(...args: any[]): any;
	set(...args: any[]): any;
	setAll(...args: any[]): any;
	setAxis(...args: any[]): any;
	setMax(...args: any[]): any;
	setMin(...args: any[]): any;
	zero(...args: any[]): any;
	x: any;
	y: any;
	z: any;
}
declare namespace Point3F {
}
declare function Point3F(...args: any[]): Point3F;

interface Point4F {
	w: any;
	x: any;
	y: any;
	z: any;
}
declare namespace Point4F {
}
declare function Point4F(...args: any[]): Point4F;

interface PointLight extends LightBase {
}
declare namespace PointLight {
}
declare function PointLight(...args: any[]): PointLight;

interface PopupMenu extends SimObject {
}
declare namespace PopupMenu {
}

interface Portal extends Zone {
}
declare namespace Portal {
}
declare function Portal(...args: any[]): Portal;

interface PostEffect extends SimSet {
	clearShaderMacros(...args: any[]): any;
	disable(...args: any[]): any;
	dumpShaderDisassembly(...args: any[]): any;
	enable(...args: any[]): any;
	getAspectRatio(...args: any[]): any;
	getRenderTargetSize(...args: any[]): any;
	isEnabled(...args: any[]): any;
	reload(...args: any[]): any;
	removeShaderMacro(...args: any[]): any;
	setShaderConst(...args: any[]): any;
	setShaderMacro(...args: any[]): any;
	setTexture(...args: any[]): any;
	toggle(...args: any[]): any;
}
declare namespace PostEffect {
}
declare function PostEffect(...args: any[]): PostEffect;

interface PostEffectMaskedBlur extends PostEffect {
	addFrameBlurRect(...args: any[]): any;
}
declare namespace PostEffectMaskedBlur {
}
declare function PostEffectMaskedBlur(...args: any[]): PostEffectMaskedBlur;

interface Precipitation extends GameBase {
	setPercentage(...args: any[]): any;
	setTurbulence(...args: any[]): any;
}
declare namespace Precipitation {
}
declare function Precipitation(...args: any[]): Precipitation;

interface PrecipitationData extends GameBaseData {
}
declare namespace PrecipitationData {
}

interface Prefab extends SceneObject {
	at(...args: any[]): any;
	isLoaded(...args: any[]): any;
	load(...args: any[]): any;
	size(...args: any[]): any;
	unload(...args: any[]): any;
}
declare namespace Prefab {
	export function getPrefabByChild(...args: any[]): any;
}
declare function Prefab(...args: any[]): Prefab;

interface ProceduralMesh extends SceneObject {
	createMesh(...args: any[]): any;
	setMaterial(...args: any[]): any;
	updateMaterial(...args: any[]): any;
}
declare namespace ProceduralMesh {
}
declare function ProceduralMesh(...args: any[]): ProceduralMesh;

interface QuatF {
	fromAngleAxis(...args: any[]): any;
	getInverted(...args: any[]): any;
	getMatrix(...args: any[]): any;
	mulP(...args: any[]): any;
	setFromMatrix(...args: any[]): any;
	w: any;
	x: any;
	y: any;
	z: any;
}
declare namespace QuatF {
}
declare function QuatF(...args: any[]): QuatF;

interface RectI {
	set(...args: any[]): any;
	extent: any;
	point: any;
}
declare namespace RectI {
}
declare function RectI(...args: any[]): RectI;

interface ReflectorDesc extends SimDataBlock {
}
declare namespace ReflectorDesc {
}

interface RenderBinManager extends SimObject {
	getBinType(...args: any[]): any;
}
declare namespace RenderBinManager {
}

interface RenderEditortMgr extends RenderObjectMgr {
}
declare namespace RenderEditortMgr {
}

interface RenderFastMgr extends RenderBinManager {
}
declare namespace RenderFastMgr {
}

interface RenderFormatToken extends RenderPassStateToken {
}
declare namespace RenderFormatToken {
}

interface RenderGlowMgr extends RenderTexTargetBinManager {
}
declare namespace RenderGlowMgr {
}

interface RenderImposterMgr extends RenderBinManager {
}
declare namespace RenderImposterMgr {
}

interface RenderObjectMgr extends RenderBinManager {
}
declare namespace RenderObjectMgr {
}

interface RenderOcclusionMgr extends RenderBinManager {
}
declare namespace RenderOcclusionMgr {
}

interface RenderParticleMgr extends RenderTexTargetBinManager {
}
declare namespace RenderParticleMgr {
}

interface RenderPassManager extends SimObject {
	addManager(...args: any[]): any;
	getManager(...args: any[]): any;
	getManagerCount(...args: any[]): any;
	removeManager(...args: any[]): any;
}
declare namespace RenderPassManager {
}

interface RenderPassStateBin extends RenderBinManager {
}
declare namespace RenderPassStateBin {
}

interface RenderPassStateToken extends SimObject {
	disable(...args: any[]): any;
	enable(...args: any[]): any;
	toggle(...args: any[]): any;
}
declare namespace RenderPassStateToken {
}

interface RenderPassfunctionBin extends RenderBinManager {
}
declare namespace RenderPassfunctionBin {
}

interface RenderPrePassMgr extends RenderTexTargetBinManager {
}
declare namespace RenderPrePassMgr {
}

interface RenderTerrainMgr extends RenderBinManager {
}
declare namespace RenderTerrainMgr {
}

interface RenderTexTargetBinManager extends RenderBinManager {
}
declare namespace RenderTexTargetBinManager {
}

interface RenderTranslucentMgr extends RenderBinManager {
}
declare namespace RenderTranslucentMgr {
}

interface River extends WaterObject {
	collideRay(...args: any[]): any;
	containsPoint(...args: any[]): any;
	deleteNode(...args: any[]): any;
	getBottomLeftEdgePosition(...args: any[]): any;
	getBottomRightEdgePosition(...args: any[]): any;
	getEdgeCount(...args: any[]): any;
	getNodeCount(...args: any[]): any;
	getNodeDepth(...args: any[]): any;
	getNodeNormal(...args: any[]): any;
	getNodePosition(...args: any[]): any;
	getNodeTransform(...args: any[]): any;
	getNodeWidth(...args: any[]): any;
	getTopLeftEdgePosition(...args: any[]): any;
	getTopMiddleEdgePosition(...args: any[]): any;
	getTopRightEdgePosition(...args: any[]): any;
	insertNode(...args: any[]): any;
	regenerate(...args: any[]): any;
	setBatchSize(...args: any[]): any;
	setMaxDivisionSize(...args: any[]): any;
	setMetersPerSegment(...args: any[]): any;
	setNodeDepth(...args: any[]): any;
	setNodeNormal(...args: any[]): any;
	setNodePosition(...args: any[]): any;
	setNodeWidth(...args: any[]): any;
}
declare namespace River {
}
declare function River(...args: any[]): River;

interface SFXAmbience extends SimDataBlock {
}
declare namespace SFXAmbience {
}

interface SFXController extends SFXSource {
	getCurrentSlot(...args: any[]): any;
	setCurrentSlot(...args: any[]): any;
}
declare namespace SFXController {
}
declare function SFXController(...args: any[]): SFXController;

interface SFXDescription extends SimDataBlock {
}
declare namespace SFXDescription {
}

interface SFXEmitter extends SceneObject {
	play(...args: any[]): any;
	stop(...args: any[]): any;
}
declare namespace SFXEmitter {
	var renderEmitters: any;
	var renderFarEmitters: any;
}
declare function SFXEmitter(...args: any[]): SFXEmitter;

interface SFXEnvironment extends SimDataBlock {
}
declare namespace SFXEnvironment {
}

interface SFXFMODEventDescImpl {
}
declare namespace SFXFMODEventDescImpl {
}

interface SFXFMODEventDescOverride {
}
declare namespace SFXFMODEventDescOverride {
}

interface SFXFMODEventSource extends SFXSource {
}
declare namespace SFXFMODEventSource {
}
declare function SFXFMODEventSource(...args: any[]): SFXFMODEventSource;

interface SFXFMODProject extends SimDataBlock {
}
declare namespace SFXFMODProject {
	export function clearBaseBanks(...args: any[]): any;
	export function loadBaseBank(...args: any[]): any;
}
declare function SFXFMODProject(...args: any[]): SFXFMODProject;

interface SFXParameter extends SimObject {
	reset(...args: any[]): any;
}
declare namespace SFXParameter {
}

interface SFXParameterGroup {
	addSource(...args: any[]): any;
	setParameterValue(...args: any[]): any;
	setPrefixFilter(...args: any[]): any;
}
declare namespace SFXParameterGroup {
}
declare function SFXParameterGroup(...args: any[]): SFXParameterGroup;

interface SFXPlayList extends SFXTrack {
}
declare namespace SFXPlayList {
}

interface SFXProfile extends SFXTrack {
}
declare namespace SFXProfile {
}

interface SFXSceneBlendLayer2D {
	blend(...args: any[]): any;
	init(...args: any[]): any;
	setEventString(...args: any[]): any;
	setParameter(...args: any[]): any;
	setTransform(...args: any[]): any;
	setVelocity(...args: any[]): any;
	setVolume(...args: any[]): any;
}
declare namespace SFXSceneBlendLayer2D {
}
declare function SFXSceneBlendLayer2D(...args: any[]): SFXSceneBlendLayer2D;

interface SFXSound extends SFXSource {
	getPosition(...args: any[]): any;
	isReady(...args: any[]): any;
	setPosition(...args: any[]): any;
}
declare namespace SFXSound {
}
declare function SFXSound(...args: any[]): SFXSound;

interface SFXSource extends SimGroup {
	addMarker(...args: any[]): any;
	getPitch(...args: any[]): any;
	getStatus(...args: any[]): any;
	getTotalPlayTime(...args: any[]): any;
	getVolume(...args: any[]): any;
	isPaused(...args: any[]): any;
	isPlaying(...args: any[]): any;
	isStopped(...args: any[]): any;
	pause(...args: any[]): any;
	play(...args: any[]): any;
	setCone(...args: any[]): any;
	setFadeTimes(...args: any[]): any;
	setParameter(...args: any[]): any;
	setPitch(...args: any[]): any;
	setTransform(...args: any[]): any;
	setVolume(...args: any[]): any;
	stop(...args: any[]): any;
}
declare namespace SFXSource {
}
declare function SFXSource(...args: any[]): SFXSource;

interface SFXSourceChannel extends SFXSource {
}
declare namespace SFXSourceChannel {
}
declare function SFXSourceChannel(...args: any[]): SFXSourceChannel;

interface SFXSpace extends SceneObject {
}
declare namespace SFXSpace {
}

interface SFXState extends SimDataBlock {
	activate(...args: any[]): any;
	deactivate(...args: any[]): any;
	disable(...args: any[]): any;
	enable(...args: any[]): any;
	isActive(...args: any[]): any;
	isDisabled(...args: any[]): any;
}
declare namespace SFXState {
}

interface SFXTrack extends SimDataBlock {
}
declare namespace SFXTrack {
}

interface SaveFileDialog extends FileDialog {
}
declare namespace SaveFileDialog {
}

interface ScatterSky extends SceneObject {
	applyChanges(...args: any[]): any;
	getAzimuth(...args: any[]): any;
	setAzimuth(...args: any[]): any;
}
declare namespace ScatterSky {
}
declare function ScatterSky(...args: any[]): ScatterSky;

interface SceneCullingState {
}
declare namespace SceneCullingState {
	var disableTerrainOcclusion: any;
	var disableZoneCulling: any;
}

interface SceneManager {
}
declare namespace SceneManager {
	var lockFrustum: any;
	var renderBoundingBoxes: any;
}

interface SceneObject extends SimObject {
	disableCollision(...args: any[]): any;
	enableCollision(...args: any[]): any;
	getEulerRotation(...args: any[]): any;
	getFirstMaterialName(...args: any[]): any;
	getForwardVector(...args: any[]): any;
	getMaterialNames(...args: any[]): any;
	getMeshMaterialNames(...args: any[]): any;
	getObjBox(...args: any[]): any;
	getObjectBox(...args: any[]): any;
	getPosition(...args: any[]): any;
	getRotation(...args: any[]): any;
	getScale(...args: any[]): any;
	getTransform(...args: any[]): any;
	getTransformF(...args: any[]): any;
	getType(...args: any[]): any;
	getWorldBox(...args: any[]): any;
	getWorldBoxCenter(...args: any[]): any;
	getWorldTransform(...args: any[]): any;
	isGlobalBounds(...args: any[]): any;
	isHidden(...args: any[]): any;
	isRenderEnabled(...args: any[]): any;
	isSelectionEnabled(...args: any[]): any;
	setHidden(...args: any[]): any;
	setPosRot(...args: any[]): any;
	setPosition(...args: any[]): any;
	setRenderEnabled(...args: any[]): any;
	setScale(...args: any[]): any;
	setSelectionEnabled(...args: any[]): any;
	setTransform(...args: any[]): any;
	setTransformF(...args: any[]): any;
}
declare namespace SceneObject {
}

interface SceneStaticManagerRender extends SceneObject {
}
declare namespace SceneStaticManagerRender {
}

interface ScopeAlwaysShape extends StaticShape {
}
declare namespace ScopeAlwaysShape {
}

interface ScriptMsgListener extends SimObject {
}
declare namespace ScriptMsgListener {
}

interface ScriptObject extends SimObject {
}
declare namespace ScriptObject {
}

declare namespace SecureComm {
	export function apiCall(...args: any[]): any;
	export function getRandomBytesHexSlow(...args: any[]): any;
}
interface Selection {
}
declare namespace Selection {
}

interface Settings extends SimObject {
}
declare namespace Settings {
}

interface ShaderData extends SimObject {
	reload(...args: any[]): any;
}
declare namespace ShaderData {
}

interface ShadowMapManager {
}
declare namespace ShadowMapManager {
	export function updateShadowDisable(...args: any[]): any;
}

interface ShadowMapPass {
}
declare namespace ShadowMapPass {
	var disableShadows: any;
}

interface ShapeBase extends GameBase {
	changeMaterial(...args: any[]): any;
	dumpMeshVisibility(...args: any[]): any;
	getEyePoint(...args: any[]): any;
	getEyeTransformF(...args: any[]): any;
	getEyeVector(...args: any[]): any;
	getGame(...args: any[]): any;
	getLookAtPoint(...args: any[]): any;
	getModelFile(...args: any[]): any;
	getTargetCount(...args: any[]): any;
	getTargetName(...args: any[]): any;
	getVelocity(...args: any[]): any;
	isHidden(...args: any[]): any;
	pauseThread(...args: any[]): any;
	playAudio(...args: any[]): any;
	playThread(...args: any[]): any;
	setAllMeshesHidden(...args: any[]): any;
	setHidden(...args: any[]): any;
	setMeshHidden(...args: any[]): any;
	setShapeName(...args: any[]): any;
	setSkinName(...args: any[]): any;
	setThreadDir(...args: any[]): any;
	setThreadPosition(...args: any[]): any;
	setThreadTimeScale(...args: any[]): any;
	setVelocity(...args: any[]): any;
	stopAudio(...args: any[]): any;
	stopThread(...args: any[]): any;
}
declare namespace ShapeBase {
}

interface ShapeBaseData extends GameBaseData {
}
declare namespace ShapeBaseData {
}

interface ShapePreview extends EditorToolBase {
	ImGui_Image(...args: any[]): any;
	ImGui_ImageButton(...args: any[]): any;
	clearShape(...args: any[]): any;
	copyToBmp(...args: any[]): any;
	fitToShape(...args: any[]): any;
	getCurentDetailName(...args: any[]): any;
	getDetailLevelCount(...args: any[]): any;
	getInputEnabled(...args: any[]): any;
	getMaterialNames(...args: any[]): any;
	getNodes(...args: any[]): any;
	getSunRotation(...args: any[]): any;
	refreshShape(...args: any[]): any;
	renderWorld(...args: any[]): any;
	setCamRotation(...args: any[]): any;
	setCurrentDetail(...args: any[]): any;
	setInputEnabled(...args: any[]): any;
	setInputEnabledEx(...args: any[]): any;
	setMaterial(...args: any[]): any;
	setObjectModel(...args: any[]): any;
	setOrbitPos(...args: any[]): any;
	setRenderState(...args: any[]): any;
	setSunRotation(...args: any[]): any;
	setZoom(...args: any[]): any;
	mBgColor: any;
	mColMeshes: any;
	mColPolys: any;
	mCurrentDL: any;
	mDetailPolys: any;
	mDetailSize: any;
	mFixedDetail: any;
	mNumBones: any;
	mNumDrawCalls: any;
	mNumMaterials: any;
	mNumWeights: any;
	mPixelSize: any;
}
declare namespace ShapePreview {
}
declare function ShapePreview(...args: any[]): ShapePreview;

declare namespace Sim {
	export function deserializeObjectFromFile(...args: any[]): any;
	export function deserializeObjectsFromDirectories(...args: any[]): any;
	export function deserializeObjectsFromFile(...args: any[]): any;
	export function deserializeObjectsFromStreamFile(...args: any[]): any;
	export function deserializeObjectsFromText(...args: any[]): any;
	export function findObject(...args: any[]): any;
	export function findObjectById(...args: any[]): any;
	export function findObjectByIdNoUpcast(...args: any[]): any;
	export function findObjectByPersistID(...args: any[]): any;
	export function getDataBlockSet(...args: any[]): any;
	export function getDecalRoadData(...args: any[]): any;
	export function getMaterialSet(...args: any[]): any;
	export function getRootGroup(...args: any[]): any;
	export function getSFXAmbienceSet(...args: any[]): any;
	export function getSFXSourceSet(...args: any[]): any;
	export function getSFXStateSet(...args: any[]): any;
	export function getUniqueName(...args: any[]): any;
	export function getVerticesOfDecalRoad(...args: any[]): any;
	export function serializeObjectToDirectories(...args: any[]): any;
	export function serializeObjectToStreamFile(...args: any[]): any;
	export function upcast(...args: any[]): any;
}
interface SimDataBlock extends SimObject {
}
declare namespace SimDataBlock {
}

interface SimGroup extends SimSet {
	add(...args: any[]): any;
	addWithName(...args: any[]): any;
	findObject(...args: any[]): any;
	remove(...args: any[]): any;
	removeObject(...args: any[]): any;
}
declare namespace SimGroup {
}
declare function SimGroup(...args: any[]): SimGroup;

interface SimObject extends ConsoleObject {
	clone(...args: any[]): any;
	decRefCount(...args: any[]): any;
	delete(...args: any[]): any;
	deleteObject(...args: any[]): any;
	deletePersistentId(...args: any[]): any;
	dump(...args: any[]): any;
	dumpGroupHierarchy(...args: any[]): any;
	generatePersistentId(...args: any[]): any;
	getClassName(...args: any[]): any;
	getDeclarationLine(...args: any[]): any;
	getDynDataFieldbyName(...args: any[]): any;
	getDynamicFields(...args: any[]): any;
	getField(...args: any[]): any;
	getFileName(...args: any[]): any;
	getGroup(...args: any[]): any;
	getID(...args: any[]): any;
	getId(...args: any[]): any;
	getInternalName(...args: any[]): any;
	getName(...args: any[]): any;
	getOrCreatePersistentID(...args: any[]): any;
	getStaticDataFieldbyIndex(...args: any[]): any;
	getStaticDataFieldbyName(...args: any[]): any;
	incRefCount(...args: any[]): any;
	isChildOfGroup(...args: any[]): any;
	isNameChangeAllowed(...args: any[]): any;
	isSelected(...args: any[]): any;
	isSubClassOf(...args: any[]): any;
	onEditorDisable(...args: any[]): any;
	onEditorEnable(...args: any[]): any;
	postApply(...args: any[]): any;
	preApply(...args: any[]): any;
	registerObject(...args: any[]): any;
	serialize(...args: any[]): any;
	serializeForEditor(...args: any[]): any;
	serializeToDirectories(...args: any[]): any;
	setDeclarationLine(...args: any[]): any;
	setDynDataFieldbyName(...args: any[]): any;
	setEditorOnly(...args: any[]): any;
	setField(...args: any[]): any;
	setHidden(...args: any[]): any;
	setInternalName(...args: any[]): any;
	setIsSelected(...args: any[]): any;
	setLocked(...args: any[]): any;
	setName(...args: any[]): any;
	setNameChangeAllowed(...args: any[]): any;
	setSelected(...args: any[]): any;
	setStaticDataFieldbyIndex(...args: any[]): any;
	setStaticDataFieldbyName(...args: any[]): any;
	unregisterObject(...args: any[]): any;
}
declare namespace SimObject {
	export function getDefaultAddGroup(...args: any[]): any;
	export function setDefaultAddGroup(...args: any[]): any;
	export function setForcedId(...args: any[]): any;
	export function setSerializeForEditor(...args: any[]): any;
	var replicating: any;
	var replicationEnabled: any;
}

interface SimObjectMemento {
	hasState(...args: any[]): any;
	restore(...args: any[]): any;
	save(...args: any[]): any;
}
declare namespace SimObjectMemento {
}
declare function SimObjectMemento(...args: any[]): SimObjectMemento;

interface SimPath extends SimGroup {
	sortMarkers(...args: any[]): any;
}
declare namespace SimPath {
}
declare function SimPath(...args: any[]): SimPath;

interface SimPersistSet extends SimSet {
}
declare namespace SimPersistSet {
}
declare function SimPersistSet(...args: any[]): SimPersistSet;

interface SimResponseCurve extends SimObject {
}
declare namespace SimResponseCurve {
}

interface SimSet extends SimObject {
	addObject(...args: any[]): any;
	at(...args: any[]): any;
	bringObjectToFront(...args: any[]): any;
	bringToFront(...args: any[]): any;
	clear(...args: any[]): any;
	deleteAllObjects(...args: any[]): any;
	findObjectById(...args: any[]): any;
	findObjectByInternalName(...args: any[]): any;
	findObjectIdAfter(...args: any[]): any;
	getCount(...args: any[]): any;
	getObject(...args: any[]): any;
	getObjectIndex(...args: any[]): any;
	getObjects(...args: any[]): any;
	getRandom(...args: any[]): any;
	idAt(...args: any[]): any;
	isMember(...args: any[]): any;
	listObjects(...args: any[]): any;
	pushObjectToBack(...args: any[]): any;
	pushToBack(...args: any[]): any;
	removeObject(...args: any[]): any;
	reorderChild(...args: any[]): any;
	size(...args: any[]): any;
}
declare namespace SimSet {
}
declare function SimSet(...args: any[]): SimSet;

interface SimXMLDocument extends SimObject {
	addComment(...args: any[]): any;
	addData(...args: any[]): any;
	addNewElement(...args: any[]): any;
	addText(...args: any[]): any;
	attribute(...args: any[]): any;
	clear(...args: any[]): any;
	clearError(...args: any[]): any;
	getData(...args: any[]): any;
	getText(...args: any[]): any;
	loadFile(...args: any[]): any;
	parse(...args: any[]): any;
	readComment(...args: any[]): any;
	removeText(...args: any[]): any;
	reset(...args: any[]): any;
	saveFile(...args: any[]): any;
	setAttribute(...args: any[]): any;
	setObjectAttributes(...args: any[]): any;
}
declare namespace SimXMLDocument {
}

interface SimpleSettings {
}
declare namespace SimpleSettings {
	var fpslimiter: any;
	var fpslimiterEnabled: any;
}

interface SkyBox extends SceneObject {
}
declare namespace SkyBox {
}

interface SpawnSphere extends MissionMarker {
}
declare namespace SpawnSphere {
}
declare function SpawnSphere(...args: any[]): SpawnSphere;

interface SpotLight extends LightBase {
}
declare namespace SpotLight {
}
declare function SpotLight(...args: any[]): SpotLight;

interface StaticShape extends ShapeBase {
}
declare namespace StaticShape {
}

interface StaticShapeData extends ShapeBaseData {
}
declare namespace StaticShapeData {
}

interface Steam {
}
declare namespace Steam {
	export function achievementUnlocked(...args: any[]): any;
	export function advanceAchievement(...args: any[]): any;
	export function clearAchievement(...args: any[]): any;
	export function clearRichPresence(...args: any[]): any;
	export function getAccountIDStr(...args: any[]): any;
	export function getStatFloat(...args: any[]): any;
	export function getStatInt(...args: any[]): any;
	export function setRichPresence(...args: any[]): any;
	export function setStatFloat(...args: any[]): any;
	export function setStatInt(...args: any[]): any;
	export function triggerScreenshot(...args: any[]): any;
	export function unlockAchievement(...args: any[]): any;
	var accountID: any;
	var accountLoggedIn: any;
	var authTicket: any;
	var authTicketValidated: any;
	var branch: any;
	var isWorking: any;
	var language: any;
	var playerName: any;
	var useSteam: any;
}

interface Sun extends SceneObject {
}
declare namespace Sun {
}

interface TSForestItemData extends ForestItemData {
}
declare namespace TSForestItemData {
}
declare function TSForestItemData(...args: any[]): TSForestItemData;

interface TSShapeConstructor extends SimObject {
	addCollisionDetail(...args: any[]): any;
	addImposter(...args: any[]): any;
	addMesh(...args: any[]): any;
	addNode(...args: any[]): any;
	addPrimitive(...args: any[]): any;
	addSequence(...args: any[]): any;
	addTrigger(...args: any[]): any;
	dumpShape(...args: any[]): any;
	getBounds(...args: any[]): any;
	getDetailLevelCount(...args: any[]): any;
	getDetailLevelIndex(...args: any[]): any;
	getDetailLevelName(...args: any[]): any;
	getDetailLevelSize(...args: any[]): any;
	getImposterDetailLevel(...args: any[]): any;
	getImposterSettings(...args: any[]): any;
	getMeshCount(...args: any[]): any;
	getMeshMaterial(...args: any[]): any;
	getMeshName(...args: any[]): any;
	getMeshSize(...args: any[]): any;
	getMeshType(...args: any[]): any;
	getNodeChildCount(...args: any[]): any;
	getNodeChildName(...args: any[]): any;
	getNodeCount(...args: any[]): any;
	getNodeIndex(...args: any[]): any;
	getNodeName(...args: any[]): any;
	getNodeObjectCount(...args: any[]): any;
	getNodeObjectName(...args: any[]): any;
	getNodeParentName(...args: any[]): any;
	getNodeTransform(...args: any[]): any;
	getObjectCount(...args: any[]): any;
	getObjectIndex(...args: any[]): any;
	getObjectName(...args: any[]): any;
	getObjectNode(...args: any[]): any;
	getSequenceBlend(...args: any[]): any;
	getSequenceCount(...args: any[]): any;
	getSequenceCyclic(...args: any[]): any;
	getSequenceFrameCount(...args: any[]): any;
	getSequenceGroundSpeed(...args: any[]): any;
	getSequenceIndex(...args: any[]): any;
	getSequenceName(...args: any[]): any;
	getSequencePriority(...args: any[]): any;
	getSequenceSource(...args: any[]): any;
	getTargetCount(...args: any[]): any;
	getTargetName(...args: any[]): any;
	getTrigger(...args: any[]): any;
	getTriggerCount(...args: any[]): any;
	notifyShapeChanged(...args: any[]): any;
	removeDetailLevel(...args: any[]): any;
	removeImposter(...args: any[]): any;
	removeMesh(...args: any[]): any;
	removeNode(...args: any[]): any;
	removeObject(...args: any[]): any;
	removeSequence(...args: any[]): any;
	removeTrigger(...args: any[]): any;
	renameDetailLevel(...args: any[]): any;
	renameNode(...args: any[]): any;
	renameObject(...args: any[]): any;
	renameSequence(...args: any[]): any;
	saveShape(...args: any[]): any;
	setBounds(...args: any[]): any;
	setDetailLevelSize(...args: any[]): any;
	setMeshMaterial(...args: any[]): any;
	setMeshSize(...args: any[]): any;
	setMeshType(...args: any[]): any;
	setNodeParent(...args: any[]): any;
	setNodeTransform(...args: any[]): any;
	setObjectNode(...args: any[]): any;
	setSequenceBlend(...args: any[]): any;
	setSequenceCyclic(...args: any[]): any;
	setSequenceGroundSpeed(...args: any[]): any;
	setSequencePriority(...args: any[]): any;
	writeChangeSet(...args: any[]): any;
}
declare namespace TSShapeConstructor {
}

interface TSStatic extends SceneObject {
	changeMaterial(...args: any[]): any;
	getAnim(...args: any[]): any;
	getModelFile(...args: any[]): any;
	getTargetCount(...args: any[]): any;
	getTargetName(...args: any[]): any;
	playAnim(...args: any[]): any;
	updateInstanceRenderData(...args: any[]): any;
}
declare namespace TSStatic {
}
declare function TSStatic(...args: any[]): TSStatic;

interface TerrainAction {
	process(...args: any[]): any;
}
declare namespace TerrainAction {
}

interface TerrainBlock extends SceneObject {
	addMaterial(...args: any[]): any;
	deleteAllMaterials(...args: any[]): any;
	exportHeightMap(...args: any[]): any;
	exportHoleMaps(...args: any[]): any;
	exportLayerMaps(...args: any[]): any;
	getBaseTexSize(...args: any[]): any;
	getHeight(...args: any[]): any;
	getHeightScale(...args: any[]): any;
	getHeightScaleInv(...args: any[]): any;
	getHeightScaleUser(...args: any[]): any;
	getMaterial(...args: any[]): any;
	getMaterialCount(...args: any[]): any;
	getMaterialName(...args: any[]): any;
	getMaterials(...args: any[]): any;
	getNormal(...args: any[]): any;
	getSmoothNormal(...args: any[]): any;
	getSquareSize(...args: any[]): any;
	getTerrFileName(...args: any[]): any;
	getWorldBlockSize(...args: any[]): any;
	importMaps(...args: any[]): any;
	removeMaterial(...args: any[]): any;
	save(...args: any[]): any;
	setHeight(...args: any[]): any;
	setHeightScale(...args: any[]): any;
	updateGrid(...args: any[]): any;
	updateMaterial(...args: any[]): any;
}
declare namespace TerrainBlock {
	var debugRender: any;
}
declare function TerrainBlock(...args: any[]): TerrainBlock;

interface TerrainEditor extends EditTSCtrl {
	attachTerrain(...args: any[]): any;
	detachTerrain(...args: any[]): any;
	getActiveTerrain(...args: any[]): any;
	getBrushPos(...args: any[]): any;
	getBrushPressure(...args: any[]): any;
	getBrushSoftness(...args: any[]): any;
	getBrushType(...args: any[]): any;
	getCurrentAction(...args: any[]): any;
	getCurrentSel(...args: any[]): any;
	getGridInfoByGridPoint(...args: any[]): any;
	getGridInfoByPoint2I(...args: any[]): any;
	getPaintMaterialIndex(...args: any[]): any;
	getSlopeMaxAngle(...args: any[]): any;
	getSlopeMinAngle(...args: any[]): any;
	getTerrainBlock(...args: any[]): any;
	gridToCenter(...args: any[]): any;
	gridToWorldByGridPoint(...args: any[]): any;
	gridToWorldByPoint2I(...args: any[]): any;
	on3DMouseDown(...args: any[]): any;
	on3DMouseDragged(...args: any[]): any;
	on3DMouseMove(...args: any[]): any;
	on3DMouseUp(...args: any[]): any;
	onPreRender(...args: any[]): any;
	processAction(...args: any[]): any;
	processActionTick(...args: any[]): any;
	raiseHeight(...args: any[]): any;
	renderGui(...args: any[]): any;
	resetCurrentSel(...args: any[]): any;
	scheduleGridUpdate(...args: any[]): any;
	setAction(...args: any[]): any;
	setBrushPos(...args: any[]): any;
	setBrushPressure(...args: any[]): any;
	setBrushSize(...args: any[]): any;
	setBrushSoftness(...args: any[]): any;
	setBrushType(...args: any[]): any;
	setCurrentSel(...args: any[]): any;
	setDirty(...args: any[]): any;
	setGridInfo(...args: any[]): any;
	setMissionDirty(...args: any[]): any;
	setPaintMaterialIndex(...args: any[]): any;
	setSlopeMaxAngle(...args: any[]): any;
	setSlopeMinAngle(...args: any[]): any;
	worldToGridByGridPoint(...args: any[]): any;
	worldToGridByPoint2I(...args: any[]): any;
	mRenderBorder: any;
}
declare namespace TerrainEditor {
}
declare function TerrainEditor(...args: any[]): TerrainEditor;

interface TerrainMaterial extends SimObject {
	getAnnotation(...args: any[]): any;
	getDetailDistance(...args: any[]): any;
	getDetailMap(...args: any[]): any;
	getDetailSize(...args: any[]): any;
	getDetailStrength(...args: any[]): any;
	getDiffuseMap(...args: any[]): any;
	getDiffuseSize(...args: any[]): any;
	getMacroDistance(...args: any[]): any;
	getMacroMap(...args: any[]): any;
	getMacroSize(...args: any[]): any;
	getMacroStrength(...args: any[]): any;
	getNormalMap(...args: any[]): any;
	getParallaxScale(...args: any[]): any;
	setAnnotation(...args: any[]): any;
	setDetailDistance(...args: any[]): any;
	setDetailMap(...args: any[]): any;
	setDetailSize(...args: any[]): any;
	setDetailStrength(...args: any[]): any;
	setDiffuseMap(...args: any[]): any;
	setDiffuseSize(...args: any[]): any;
	setMacroDistance(...args: any[]): any;
	setMacroMap(...args: any[]): any;
	setMacroSize(...args: any[]): any;
	setMacroStrength(...args: any[]): any;
	setNormalMap(...args: any[]): any;
	setParallaxScale(...args: any[]): any;
	setUseSideProjection(...args: any[]): any;
	useSideProjection(...args: any[]): any;
}
declare namespace TerrainMaterial {
	export function findOrCreate(...args: any[]): any;
	export function getWarningMaterial(...args: any[]): any;
}
declare function TerrainMaterial(...args: any[]): TerrainMaterial;

interface TerrainSmoothAction extends UndoAction {
}
declare namespace TerrainSmoothAction {
}

interface TheoraTextureObject extends SimObject {
}
declare namespace TheoraTextureObject {
}

interface TimeOfDay extends SceneObject {
	animate(...args: any[]): any;
	setDayLength(...args: any[]): any;
	setPlay(...args: any[]): any;
	setTimeOfDay(...args: any[]): any;
}
declare namespace TimeOfDay {
}
declare function TimeOfDay(...args: any[]): TimeOfDay;

declare namespace TorqueScript {
	export function call(...args: any[]): any;
	export function callNoReturn(...args: any[]): any;
	export function eval_(...args: any[]): any;
	export function exec(...args: any[]): any;
	export function getBoolVar(...args: any[]): any;
	export function getVar(...args: any[]): any;
	export function setVar(...args: any[]): any;
	var objectCopyFailures: any;
}
declare namespace TrackIR {
	export function available(...args: any[]): any;
	export function getData(...args: any[]): any;
	export function init(...args: any[]): any;
	export function recording(...args: any[]): any;
	export function start(...args: any[]): any;
	export function stop(...args: any[]): any;
}
interface UI {
}
declare namespace UI {
}

interface UndoAction extends SimObject {
}
declare namespace UndoAction {
}

interface UndoManager extends SimObject {
	redo(...args: any[]): any;
	undo(...args: any[]): any;
}
declare namespace UndoManager {
}
declare function UndoManager(...args: any[]): UndoManager;

interface UndoScriptAction extends UndoAction {
}
declare namespace UndoScriptAction {
}

interface VirtualInputManager {
	emitEvent(...args: any[]): any;
	registerDevice(...args: any[]): any;
	resetDevices(...args: any[]): any;
	unregisterDevice(...args: any[]): any;
}
declare namespace VirtualInputManager {
}

interface WaterBlock extends WaterObject {
}
declare namespace WaterBlock {
}
declare function WaterBlock(...args: any[]): WaterBlock;

interface WaterObject extends SceneObject {
}
declare namespace WaterObject {
}
declare function WaterObject(...args: any[]): WaterObject;

interface WaterPlane extends WaterObject {
}
declare namespace WaterPlane {
}
declare function WaterPlane(...args: any[]): WaterPlane;

interface WayPoint extends MissionMarker {
}
declare namespace WayPoint {
}
declare function WayPoint(...args: any[]): WayPoint;

interface WinInput {
}
declare namespace WinInput {
	export function getControllersInfoJson(...args: any[]): any;
	export function getFeaturesString(...args: any[]): any;
	export function getProductGUID(...args: any[]): any;
	export function getProductName(...args: any[]): any;
	export function getRegisteredDevices(...args: any[]): any;
	export function getVendorIDProductID(...args: any[]): any;
	export function setForwardFilteredEvents(...args: any[]): any;
	export function setForwardRawEvents(...args: any[]): any;
	export function setUnfocusedInput(...args: any[]): any;
	export function updateFFBBindingParameters(...args: any[]): any;
}

interface WorldEditor extends EditTSCtrl {
	createConvexShapeFrom(...args: any[]): any;
	createPolyhedralObject(...args: any[]): any;
	setSoftSnapAlignment(...args: any[]): any;
}
declare namespace WorldEditor {
}
declare function WorldEditor(...args: any[]): WorldEditor;

interface WorldEditorSelection extends SimPersistSet {
}
declare namespace WorldEditorSelection {
}
declare function WorldEditorSelection(...args: any[]): WorldEditorSelection;

interface ZipArchive {
	addFile(...args: any[]): any;
	close(...args: any[]): any;
	deleteFile(...args: any[]): any;
	extractFile(...args: any[]): any;
	getFileEntryHashByIdx(...args: any[]): any;
	getFileList(...args: any[]): any;
	getModeString(...args: any[]): any;
	openArchiveName(...args: any[]): any;
	readFileEntryByIdx(...args: any[]): any;
}
declare namespace ZipArchive {
}
declare function ZipArchive(...args: any[]): ZipArchive;

interface Zone extends SceneObject {
	dumpZoneState(...args: any[]): any;
}
declare namespace Zone {
}
declare function Zone(...args: any[]): Zone;

declare let FS: BNGBase_FS_IFileSystem;
declare let LoadingManager: LoadingManager;
declare let Lua: Lua;
declare let be: BeamEngine;
declare let debugDrawer: DebugDrawer;
