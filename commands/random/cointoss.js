module.exports = {
    name: "cointoss",
    category: "random",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        
        function doRandHT() {
        var rand = ['HEADS!','TAILS!'];

        return rand[Math.floor(Math.random()*rand.length)];
        }

        
        // message.reply({ embed });
        message.reply(doRandHT());


    
        
    }
} 