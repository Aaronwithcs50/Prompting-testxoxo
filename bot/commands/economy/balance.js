const {cmd,embeds,Member,number}=require('../_factory'); module.exports=cmd('balance','Show balance','economy',async(i)=>{const m=await Member.findOne({guildId:i.guild.id,userId:i.user.id}).lean()||{}; return embeds.safeReply(i,{embeds:[embeds.info('Balance',`Wallet: ${number(m.wallet)}
Bank: ${number(m.bank)}
Total: ${number((m.wallet||0)+(m.bank||0))}`)]});},['bal']);