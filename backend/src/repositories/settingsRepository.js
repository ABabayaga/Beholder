const settingsModel = require('../models/settingsModel');
const bcrypt = require('bcryptjs');
const crypto = require('../utils/crypto');


const settingsCache = {};
async function getSetingsDecrypted(id) {
    let settings = settingsCache[id];

    if (!settings) {
        settings = await getSettings(id);
        settings.secretKey = crypto.decrypt(settings.secretKey);
        settingsCache[id] = settings;
    }

    return settings;
}

function clearSettingsCache(id) {
    settingsCache[id] = null;
}

function getSettingsByEmail(email) {
    return settingsModel.findOne({ where: { email } });
}

function getSettings(id) {
    return settingsModel.findOne({ where: { id } });
}

const setttingsCache = {}
async function getDecryptedSettings(id) {
    let settings = settingsCache[id];

    if (!settings) {
        settings = await getSettings(id);
        settings.secretKey = crypto.decrypt(settings.secretKey);
        settings[id] = settings;
    }

    return settings;
}

function clearSettingsCache(id){
      settingsCache[id] = null;  
}

async function getDefaultSettings() {
    const settings = await settingsModel.findOne();
    return getDecryptedSettings(settings.id);
}

async function updateSettings(id, newSettings) {
    const currentSettings = await getSettings(id);

    if (newSettings.email !== currentSettings.email)
        currentSettings.email = newSettings.email;

    if (newSettings.password)
        currentSettings.password = bcrypt.hashSync(newSettings.password);

    if (newSettings.apiUrl !== currentSettings.apiUrl)
        currentSettings.apiUrl = newSettings.apiUrl;

    if (newSettings.streamUrl !== currentSettings.streamUrl)
        currentSettings.streamUrl = newSettings.streamUrl;

    if (newSettings.accessKey !== currentSettings.accessKey)
        currentSettings.accessKey = newSettings.accessKey;

    if (newSettings.secretKey){
        currentSettings.secretKey = crypto.encrypt(newSettings.secretKey);
        clearSettingsCache(id);
    }

    await currentSettings.save();
}

module.exports = {
    getSettingsByEmail,
    getSettings,
    updateSettings,
    getSetingsDecrypted,
    clearSettingsCache,
    getDefaultSettings,
    getDecryptedSettings
}