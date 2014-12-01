﻿/**
 * This module is used to house interfaces describing server-side data types
 * that are used on the client-side (eg as parameters or responses to/from
 * AJAX calls).
 */
declare module JustinCredible.SmartHomeMobile.AlertMeApiTypes {

    /**
     * Response for GET /login
     */
    interface LoginResult {
        hubIds: string[];
        hubNames: string[];
        ApiSession: string;
        userId: number;
        tandcConfirmed: boolean;
        userName: string;
        firstName: string;
        lastName: string;
        termsAndConditions: {
            latestVersion: number;
            latestAcceptedVersion: number;
            latestText: string;
            shouldShow: boolean;
        };
        userUtcOffset: number;
        isSecondary: boolean;
        primaryUsers: any[];
        primaryUsersDetails: any[];
    }

    /**
     * Response for GET /widgets/locks
     */
    interface LocksGetResult {
        locks: LockDevice[];
        atAGlance: {
            name: string;
            locked: number;
            unlocked: number;
            total: number
        };
        widgetStatus: string;
        widgetVisible: boolean
    }

    /**
     * Response for PUT /widgets/locks/lockState
     */
    interface LockStatePutResult {
        timeout: number;
    }

    /**
     * Describes a device with locking capabilities (eg deadbolts).
     */
    interface LockDevice {
        id: string;
        name: string;
        type: string;
        presence: boolean;
        lockState: string;
        canLock: boolean;
        canBuzzIn: boolean;
    }

    /**
     * Response for PUT /widgets/alarm/mode
     */
    interface AlarmModePutResult {
        state: string;
        grace: number;
    }

    /**
     * Response for GET /widgets/alarm
     */
    interface AlarmGetResult {
        status: {
            deviceName: string;
            deviceType: string;
            deviceName2: string;
            deviceType2: string;
            alarm: string;
            message: string;
            time: string;
        };
        behaviors: string[];
        targetBehavior: string;
        behavior: string;
        showSlider: boolean;
        showCancel: boolean;
        state: string;
        widgetStatus: string;
        widgetVisible: boolean;
    }

    /**
     * Response for GET /widgets/alarm/overview
     */
    interface AlarmOverviewGetResult {
        summary: {
            message: string;
            alarm: string;
            triggerTime: string;
            clearTime: string;
            deviceType: string;
            deviceName: string;
        };
        triggeredDevices: AlarmDevice[];
        otherDevices: { [id: string]: AlarmDevice }
    }

    /**
     * Describes a device that can trigger an alarm.
     */
    interface AlarmDevice {
        name: string;
        type: string;
        alarm: string;
        presence: boolean;
        state: string;
        alarmTypes: string[];
    }

    /**
     * Response for GET /widgets/smartplugs
     */
    interface SmartPlugsGetResult {
        smartplugs: SmartPlugDevice[];
    }

    /**
     * Describes a device that controls power (eg light switches, electrical outlets, etc).
     */
    interface SmartPlugDevice {
        id: string;
        name: string;
        type: string;
        controlType: string;
        plugType: string;
        presence: boolean;
        onOffState: string;
        lastKnownState: string;
        supportsIntensity: boolean;
        intensity: number;
        supportsSpeed: boolean;
        speed: string;
        applianceType: string;
        currency: string;
        costUnits: string;
        powerUnits: string;
        remoteMode: boolean;
        supportsPower: boolean;
        scheduleEnabled: boolean;
        supportsLock: boolean;
        isLocked: boolean;
        state: string; // API docs don't say what the type is, assuming string.
        bulb: boolean;
        lighting: boolean;
        howAmIDoing: number;
        costSoFarToday: any; // Number or string.
        costYesterday: any; // Number or string.
        costPredictedToday: any; // Number or string.
        powerNow: number;
        changeSummary: string;
        presenceYesterday: boolean;
        nextEvent: SmartPlugNextEvent;
    }

    /**
     * Describes the "next event" for a smart plug device.
     */
    interface SmartPlugNextEvent {
        action: string;
        timestamp: string;
    }
}