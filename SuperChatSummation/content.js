const ids = new Set(); 
const waluty = new Map();
waluty.set('USD',1);
waluty.set('AED',3.6725);
waluty.set('AFN',79.6813);
waluty.set('ALL',103.7667);
waluty.set('AMD',495.7700);
waluty.set('ANG',1.7900);
waluty.set('AOA',648.2455);
waluty.set('ARS',95.9296);
waluty.set('AUD',1.3373);
waluty.set('AWG',1.7900);
waluty.set('AZN',1.6981);
waluty.set('BAM',1.6473);
waluty.set('BBD',2.0000);
waluty.set('BDT',84.7684);
waluty.set('BGN',1.6474);
waluty.set('BHD',0.3760);
waluty.set('BIF',1968.9507);
waluty.set('BMD',1.0000);
waluty.set('BND',1.3504);
waluty.set('BOB',6.8782);
waluty.set('BRL',5.2597);
waluty.set('BSD',1.0000);
waluty.set('BTN',74.5783);
waluty.set('BWP',10.9499);
waluty.set('BYN',2.5798);
waluty.set('BZD',2.0000);
waluty.set('CAD',1.2469);
waluty.set('CDF',1985.2812);
waluty.set('CHF',0.9149);
waluty.set('CLP',752.3086);
waluty.set('CNY',6.4841);
waluty.set('COP',3811.1753);
waluty.set('CRC',618.3885);
waluty.set('CUC',1.0000);
waluty.set('CUP',25.7500);
waluty.set('CVE',92.8711);
waluty.set('CZK',21.8220);
waluty.set('DJF',177.7210);
waluty.set('DKK',6.2835);
waluty.set('DOP',56.9668);
waluty.set('DZD',134.5895);
waluty.set('EGP',15.6762);
waluty.set('ERN',15.0000);
waluty.set('ETB',43.8587);
waluty.set('EUR',0.8423);
waluty.set('FJD',2.0683);
waluty.set('FKP',0.7213);
waluty.set('FOK',6.2835);
waluty.set('GBP',0.7214);
waluty.set('GEL',3.1400);
waluty.set('GGP',0.7213);
waluty.set('GHS',5.9231);
waluty.set('GIP',0.7213);
waluty.set('GMD',51.8439);
waluty.set('GNF',9809.0246);
waluty.set('GTQ',7.7338);
waluty.set('GYD',208.6912);
waluty.set('HKD',7.7679);
waluty.set('HNL',23.8379);
waluty.set('HRK',6.3460);
waluty.set('HTG',93.7089);
waluty.set('HUF',302.0556);
waluty.set('IDR',14556.2126);
waluty.set('ILS',3.3057);
waluty.set('IMP',0.7213);
waluty.set('INR',74.5789);
waluty.set('IQD',1456.9342);
waluty.set('IRR',41895.5443);
waluty.set('ISK',123.4681);
waluty.set('JMD',151.9464);
waluty.set('JOD',0.7090);
waluty.set('JPY',110.1070);
waluty.set('KES',107.9102);
waluty.set('KGS',84.6024);
waluty.set('KHR',4067.9217);
waluty.set('KID',1.3373);
waluty.set('KMF',414.3616);
waluty.set('KRW',1146.2883);
waluty.set('KWD',0.2996);
waluty.set('KYD',0.8333);
waluty.set('KZT',429.7488);
waluty.set('LAK',9469.6970);
waluty.set('LBP',1507.5000);
waluty.set('LKR',198.5461);
waluty.set('LRD',171.4384);
waluty.set('LSL',14.2350);
waluty.set('LYD',4.5002);
waluty.set('MAD',8.9205);
waluty.set('MDL',18.0655);
waluty.set('MGA',3757.6404);
waluty.set('MKD',51.9403);
waluty.set('MMK',1645.8652);
waluty.set('MNT',2841.1843);
waluty.set('MOP',8.0010);
waluty.set('MRU',36.0994);
waluty.set('MUR',42.4417);
waluty.set('MVR',15.2561);
waluty.set('MWK',807.5077);
waluty.set('MXN',19.9017);
waluty.set('MYR',4.1842);
waluty.set('MZN',63.8253);
waluty.set('NAD',14.2350);
waluty.set('NGN',428.9423);
waluty.set('NIO',34.9895);
waluty.set('NOK',8.6995);
waluty.set('NPR',119.3252);
waluty.set('NZD',1.4306);
waluty.set('OMR',0.3845);
waluty.set('PAB',1.0000);
waluty.set('PEN',3.9599);
waluty.set('PGK',3.5127);
waluty.set('PHP',50.1333);
waluty.set('PKR',159.4548);
waluty.set('PLN',3.8403);
waluty.set('PYG',6824.1498);
waluty.set('QAR',3.6400);
waluty.set('RON',4.1482);
waluty.set('RSD',99.6016);
waluty.set('RUB',74.4318);
waluty.set('RWF',1004.9957);
waluty.set('SAR',3.7500);
waluty.set('SBD',7.8571);
waluty.set('SCR',14.2466);
waluty.set('SDG',448.9071);
waluty.set('SEK',8.5802);
waluty.set('SGD',1.3504);
waluty.set('SHP',0.7213);
waluty.set('SLL',10257.2864);
waluty.set('SOS',577.6129);
waluty.set('SRD',20.9770);
waluty.set('SSP',177.5932);
waluty.set('STN',20.6352);
waluty.set('SYP',1265.3323);
waluty.set('SZL',14.2350);
waluty.set('THB',32.6883);
waluty.set('TJS',11.3112);
waluty.set('TMT',3.5000);
waluty.set('TND',2.7712);
waluty.set('TOP',2.2272);
waluty.set('TRY',8.6691);
waluty.set('TTD',6.7743);
waluty.set('TVD',1.3373);
waluty.set('TWD',27.9772);
waluty.set('TZS',2315.3590);
waluty.set('UAH',27.2731);
waluty.set('UGX',3542.6801);
waluty.set('UYU',43.8649);
waluty.set('UZS',10548.2979);
waluty.set('VES',3275925.3900);
waluty.set('VND',22970.0566);
waluty.set('VUV',110.5554);
waluty.set('WST',2.5443);
waluty.set('XAF',552.4821);
waluty.set('XCD',2.7000);
waluty.set('XDR',0.7026);
waluty.set('XOF',552.4821);
waluty.set('XPF',100.5078);
waluty.set('YER',250.1251);
waluty.set('ZAR',14.2351);

let subs = 0, kaska = 0;

function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.zapyt == 'jd') snap(request, sender, sendResponse);
        else call(request, sender, sendResponse);
    }
);

function call(request, sender, sendResponse)
{
    sendResponse({suby: subs, kasa: kaska});
}

function snap(request, sender, sendResponse)
{
    let co = document.getElementById('chatframe').contentDocument.getElementById('items').getElementsByClassName('style-scope yt-live-chat-ticker-renderer');
    if(co)
    {
        for(let i = 0; i < co.length; i++)
            if(ids.has(co[i].id) == false)
            {
                ids.add(co[i].id)
                if(co[i].getElementsByClassName('style-scope yt-live-chat-ticker-sponsor-item-renderer').length == 4)
                    ++subs;
                else
                {
                    let to = co[i].getElementsByTagName('SPAN')[0].textContent;
                    let waluta = "";
                    let pitos = parseInt(to);
                    for(let j in to)
                        if(isCharacterALetter(to[j]))
                            waluta = waluta + to[j];
                    if(waluty.has(waluta))
                        kaska += Math.round(pitos/waluty.get(waluta));
                }
            }
    }
};