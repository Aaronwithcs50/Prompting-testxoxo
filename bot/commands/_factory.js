const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const embeds = require('../utils/embeds');
const Member = require('../../models/Member');
const Guild = require('../../models/Guild');
const Warning = require('../../models/Warning');
const AuditLog = require('../../models/AuditLog');
const { number, parseDuration, calculateLevel } = require('../utils/format');

function cmd(name, description, category, execute, aliases = []) {
  return {
    data: new SlashCommandBuilder().setName(name).setDescription(description),
    category,
    userPermissions: [],
    botPermissions: [],
    cooldown: 5,
    guildOnly: true,
    aliases,
    usage: '',
    execute,
    prefixExecute: async (message, args, client) => execute({
      guild: message.guild,
      user: message.author,
      member: message.member,
      channel: message.channel,
      options: {
        getUser: () => message.mentions.users.first(),
        getString: () => args.join(' '),
        getInteger: () => Number(args[0])
      },
      reply: (options) => message.reply(options),
      deferReply: async () => {},
      editReply: (options) => message.reply(options)
    }, client)
  };
}

async function simple(interaction, title, body) {
  return embeds.safeReply(interaction, { embeds: [embeds.info(title, body)], ephemeral: false });
}

module.exports = { cmd, simple, embeds, Member, Guild, Warning, AuditLog, PermissionFlagsBits, number, parseDuration, calculateLevel };
