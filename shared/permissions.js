const { PermissionFlagsBits } = require('discord.js');
function hasManageGuild(permissions) { return (BigInt(permissions || 0) & PermissionFlagsBits.ManageGuild) === PermissionFlagsBits.ManageGuild; }
function missing(member, perms = []) { return perms.filter((p) => !member.permissions.has(p)); }
module.exports = { hasManageGuild, missing };