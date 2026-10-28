export type GuideCategory = 
  | "portrait" 
  | "night" 
  | "street" 
  | "macro" 
  | "video";

export interface CameraSetting {
  lens: string;
  iso: string;
  shutter: string;
  ev: string;
  focusMode: string;
  lighting: string;
}

export interface GuideStep {
  title: string;
  description: string;
  proTip: string;
  commonMistake: string;
  iconName?: string;
}

export interface RealWorldCase {
  scenario: string;
  solution: string;
}

export interface GuideItem {
  id: GuideCategory;
  title: string;
  subtitle: string;
  tag: string;
  coverImage: string;
  beforeImage?: string;
  afterImage?: string;
  accentColor: string;
  difficulty: "Başlangıç" | "Orta" | "İleri Seviye";
  duration: string;
  summary: string;
  recommendedSettings: CameraSetting;
  steps: GuideStep[];
  rules: {
    title: string;
    description: string;
  }[];
  equipmentTips?: string[];
  proChecklist?: string[];
  realWorldCases?: RealWorldCase[];
}

export interface BeforeAfterScenario {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImage: string;
  afterImage: string;
  beforeDetails: string;
  afterDetails: string;
  appliedSettings: {
    lens: string;
    shutter: string;
    iso: string;
    ev: string;
    keyTechnique: string;
  };
}

export interface DeviceShortcut {
  id: string;
  os: "ios" | "android";
  title: string;
  category: "Odak & Pozlama" | "Gece Modu" | "RAW & Kalite" | "Hızlı Çekim" | "Pro Mod";
  icon: string;
  steps: string[];
  shortcutTip: string;
  testedDevices: string;
}

export interface QuizState {
  subject: string;
  light: string;
  device: string;
  iphoneModel?: string;
  samsungModel?: string;
  vibe: string;
}

export interface ShotRecipe {
  title: string;
  subtitle: string;
  lensChoice: string;
  focusAndEV: string;
  compositionTip: string;
  goldenRule: string;
  recommendedSettings: {
    iso: string;
    shutter: string;
    ev: string;
    lens: string;
  };
  proChecklist: string[];
  modelSpecificTip?: string;
}

/* ================= DEVICE & CAMERA MODEL SPECIFICATIONS & RECIPES ================= */

export type DeviceBrand = "apple" | "samsung";

export type ShootingCategoryKey = 
  | "night" 
  | "street" 
  | "landscape" 
  | "portrait" 
  | "foodMacro"
  | "video";

export interface DeviceShootingRecipe {
  categoryName: string;
  title: string;
  recommendedLens: string;
  isoShutterEv: string;
  hardwareAdvantage: string;
  stepByStepTip: string;
  secretTrick: string;
  commonTrap: string;
}

export type IphoneShootingRecipe = DeviceShootingRecipe;

export interface DeviceModelSpec {
  id: string;
  brand: DeviceBrand;
  series: string;
  name: string;
  badge: string;
  generation: string;
  releaseYear: number;
  isPro: boolean;
  backViewImage: string;
  accentColor?: string;
  bestShootingType: string;
  recommendedSetting: string;
  topFeatureBadge: string;
  hardware: {
    mainSensor: string;
    ultraWide: string;
    telephoto: string;
    zoomCapabilities: string;
    apertures: string;
    rawSupport: string;
    macroSupport: boolean;
    sensorShiftOis?: boolean;
    ois?: boolean | string;
    specialTech?: string[];
    // Apple-specific tags
    lidar?: boolean;
    actionButton?: boolean;
    cameraControl?: boolean;
    photonicEngine?: boolean;
    // Samsung-specific tags
    spaceZoom?: string;
    proVisualEngine?: boolean;
    expertRawSupport?: boolean;
  };
  evaluation: {
    strongestSide: string;
    weakestSide: string;
    scoreOverview: {
      night: number;
      portrait: number;
      street: number;
      macro: number;
      landscape: number;
      video?: number;
    };
    verdictBadge: string;
    bestShootingScenarioDetails?: string;
  };
  recipes: Partial<Record<ShootingCategoryKey, DeviceShootingRecipe>> & {
    night: DeviceShootingRecipe;
    street: DeviceShootingRecipe;
    landscape: DeviceShootingRecipe;
    portrait: DeviceShootingRecipe;
    foodMacro: DeviceShootingRecipe;
    video?: DeviceShootingRecipe;
  };
}

export interface IphoneModelSpec extends DeviceModelSpec {
  brand: "apple";
}

export interface SamsungModelSpec extends DeviceModelSpec {
  brand: "samsung";
}
