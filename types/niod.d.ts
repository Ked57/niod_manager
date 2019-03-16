import core from "express";

export type Callback = {
  ([args]: any): void;
};

export function addA2ADispatcher(
  args: {
    name: string; // The name you want to give to your dispatcher
    detection: {
      prefixes: string[]; // Prefixes for the EWR groups
      range: number; // The detection range
    };
    border: {
      name: string; // Name of the zone that acts as border
    };
    engageRadius: number; // The engage radius
    squadrons: {
      name: string; // Name of the squadron
      map: "Caucasus" | "Nevada" | "Normandy" | "PersianGulf"; // Map you're running the mission on
      airbase: string; // Name of the Airbase
      groupLength: number; // The number of units per group there should be
      takeofMethod: "Air" | "Runway" | "Hot" | "Cold"; // Takeoff method
      landingMethod: "Air" | "Runway" | "Hot" | "Cold"; // Landing method
      cap?: {
        // There should be either a CAP or GCI field, not both
        zoneName: string; // Name of the zone to do CAP on
        minCAPAlt: number; // The minimal altitude to patrol at
        maxCAPAlt: number; // The maximal altitude to patrol at
        minCAPSpeed: number; // Minimal speed for patrol
        maxCAPSPeed: number; // Maximal speed for patrol
        minCAPInterceptSpeed: number; // Minimum intercept speed
        maxCAPInterceptSpeed: number; // Maximum intercept speed
        mesureType: "BARO" | "RADIO"; // Type of mesurement for altitude
        numberPerGroup: number; // The number of units per group there should be
        lowerCheckTime: number; // The minimum amount of time between decisions of the dispatcher
        upperCheckTime: number; // The maximum amount of time between decisions of the dispatcher
        decisionWeight: number; // The weight of the decision to spawn new units for the dispatcher
      };
      gci?: {
        minInterceptSpeed: number; // Minimum intercept speed
        maxInterceptSpeed: number; // Maximum intercept speed
      };
    }[];
  },
  callback: Callback
): void;
export function addTrigger(
  type: string,
  groupName: string,
  zoneName: string,
  frequency: "once" | "repeat",
  callback: Callback
): void;
export function getGroupInfo(): any;
export function initNiod(): Promise<core.Express>;
export function spawnGroup(groupName: string, callback: Callback): void;
export function spawnGroupInZone(
  groupName: string,
  zoneName: string,
  callback: Callback,
  randomize?: boolean
): void;
