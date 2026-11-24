import { DeviceModelSpec, DeviceBrand, IphoneModelSpec, SamsungModelSpec, HuaweiModelSpec } from "@/types";
import { iphoneSpecsData } from "./iphoneSpecs";
import { samsungSpecsData as rawSamsungSSpecs } from "./samsungSpecs";
import { samsungZSpecsData } from "./samsungZSpecs";
import { samsungASpecsData } from "./samsungASpecs";
import { huaweiSpecsData } from "./huaweiSpecs";

export const samsungSSpecsData: SamsungModelSpec[] = rawSamsungSSpecs;
export { iphoneSpecsData, samsungZSpecsData, samsungASpecsData, huaweiSpecsData };

export const samsungSpecsData: SamsungModelSpec[] = [
  ...samsungSSpecsData,
  ...samsungZSpecsData,
  ...samsungASpecsData,
];

export const allDevices: DeviceModelSpec[] = [
  ...iphoneSpecsData,
  ...samsungSpecsData,
  ...huaweiSpecsData,
];

export const totalDeviceCount = allDevices.length;
export const iphoneCount = iphoneSpecsData.length;
export const samsungSCount = samsungSSpecsData.length;
export const samsungZCount = samsungZSpecsData.length;
export const samsungACount = samsungASpecsData.length;
export const samsungCount = samsungSpecsData.length;
export const huaweiCount = huaweiSpecsData.length;

export function getDeviceById(id: string): DeviceModelSpec | undefined {
  return allDevices.find((device) => device.id === id);
}

export function getDevicesByBrand(brand: DeviceBrand): DeviceModelSpec[] {
  return allDevices.filter((device) => device.brand === brand);
}

export function getSamsungSModels(): SamsungModelSpec[] {
  return samsungSSpecsData;
}

export function getSamsungZModels(): SamsungModelSpec[] {
  return samsungZSpecsData;
}

export function getSamsungAModels(): SamsungModelSpec[] {
  return samsungASpecsData;
}

export function getHuaweiModels(): HuaweiModelSpec[] {
  return huaweiSpecsData;
}

export function getIphoneModel(id: string): IphoneModelSpec | undefined {
  return iphoneSpecsData.find((device) => device.id === id);
}

export function getSamsungModel(id: string): SamsungModelSpec | undefined {
  return samsungSpecsData.find((device) => device.id === id);
}

export function getHuaweiModel(id: string): HuaweiModelSpec | undefined {
  return huaweiSpecsData.find((device) => device.id === id);
}
