import { DeviceModelSpec, DeviceBrand, IphoneModelSpec, SamsungModelSpec } from "@/types";
import { iphoneSpecsData } from "./iphoneSpecs";
import { samsungSpecsData } from "./samsungSpecs";

export { iphoneSpecsData, samsungSpecsData };

export const allDevices: DeviceModelSpec[] = [
  ...iphoneSpecsData,
  ...samsungSpecsData,
];

export const totalDeviceCount = allDevices.length;
export const iphoneCount = iphoneSpecsData.length;
export const samsungCount = samsungSpecsData.length;

export function getDeviceById(id: string): DeviceModelSpec | undefined {
  return allDevices.find((device) => device.id === id);
}

export function getDevicesByBrand(brand: DeviceBrand): DeviceModelSpec[] {
  return allDevices.filter((device) => device.brand === brand);
}

export function getIphoneModel(id: string): IphoneModelSpec | undefined {
  return iphoneSpecsData.find((device) => device.id === id);
}

export function getSamsungModel(id: string): SamsungModelSpec | undefined {
  return samsungSpecsData.find((device) => device.id === id);
}
