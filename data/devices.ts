import { DeviceModelSpec, DeviceBrand, IphoneModelSpec, SamsungModelSpec } from "@/types";
import { iphoneSpecsData } from "./iphoneSpecs";
import { samsungSpecsData as rawSamsungSSpecs } from "./samsungSpecs";
import { samsungZSpecsData } from "./samsungZSpecs";

export const samsungSSpecsData: SamsungModelSpec[] = rawSamsungSSpecs;
export { iphoneSpecsData, samsungZSpecsData };

export const samsungSpecsData: SamsungModelSpec[] = [
  ...samsungSSpecsData,
  ...samsungZSpecsData,
];

export const allDevices: DeviceModelSpec[] = [
  ...iphoneSpecsData,
  ...samsungSpecsData,
];

export const totalDeviceCount = allDevices.length;
export const iphoneCount = iphoneSpecsData.length;
export const samsungSCount = samsungSSpecsData.length;
export const samsungZCount = samsungZSpecsData.length;
export const samsungCount = samsungSpecsData.length;

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

export function getIphoneModel(id: string): IphoneModelSpec | undefined {
  return iphoneSpecsData.find((device) => device.id === id);
}

export function getSamsungModel(id: string): SamsungModelSpec | undefined {
  return samsungSpecsData.find((device) => device.id === id);
}
