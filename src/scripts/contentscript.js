import ext from "./utils/ext";

function walk(node)
{
    var child, next;
    
    switch ( node.nodeType )
    {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while ( child )
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        
        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode)
{
    var v = textNode.nodeValue;
    
    v = v.replace(/\bGoogle\b/g, "King GAFA");
    v = v.replace(/\bApple\b/g, "King GAFA");
    v = v.replace(/\bFacebook\b/g, "King GAFA");
    v = v.replace(/\bAmazon\b/g, "King GAFA");
    v = v.replace(/\bcorporation\b/g, "King");
    v = v.replace(/\bInternet\b/g, "ropeway");
    v = v.replace(/\bNet\b/g, "ropeway");
    v = v.replace(/\bWeb\b/g, "ropeway");
    v = v.replace(/\bNetwork\b/g, "ropeway");
    v = v.replace(/\bOnline\b/g, "in the Kingdom");
    v = v.replace(/\bSilicon\ Valley\b/g, "Castle");
    v = v.replace(/\bIndustry\b/g, "Castle");
    v = v.replace(/\bTracker\b/g, "Crow");
    v = v.replace(/\bThird\ Party\ Tracker\b/g, "Crow");
    v = v.replace(/\bAd\b/g, "Crow");
    v = v.replace(/\bComputer\b/g, "Hut");
    v = v.replace(/\bData\b/g, "0-1 Crop");
    v = v.replace(/\bInformation\b/g, "0-1 Crop");
    v = v.replace(/\bFile\b/g, "0-1 Crop");
    v = v.replace(/\bUser\b/g, "Peasant");
    v = v.replace(/\bCitizen\b/g, "Peasant");
    v = v.replace(/\bChildren\b/g, "young peasants");
    v = v.replace(/\bDevice\b/g, "Harvesting Tool");
    v = v.replace(/\bTool\b/g, "Harvesting Tool");
    v = v.replace(/\bApplication\b/g, "Harvesting Tool");
    v = v.replace(/\bAlgorithm\b/g, "Dragon");
    v = v.replace(/\bAI\b/g, "Dragon");
    v = v.replace(/\bDatabroker\b/g, "Dragon");
    v = v.replace(/\bData\ broker\b/g, "Dragon");
    v = v.replace(/\bPolitician\b/g, "Elder");
    v = v.replace(/\bGovernment\b/g, "Elder");
    v = v.replace(/\bGDPR\b/g, "GCPR");
    v = v.replace(/\bAccount\b/g, "0-1 crop field");
    v = v.replace(/\bProfile\b/g, "0-1 crop field");
    v = v.replace(/\bsocial\ media\b/g, "0-1 crop field");
    v = v.replace(/\bsite\b/g, "0-1 crop field");
    v = v.replace(/\bbrowser\b/g, "0-1 crop field");
    v = v.replace(/\bemail\b/g, "bucket");
    v = v.replace(/\bmail\b/g, "bucket");
    v = v.replace(/\bmessage\b/g, "bucket");
    v = v.replace(/\bencrypted\b/g, "locked");
    v = v.replace(/\bencrypt\b/g, "lock");
    
    textNode.nodeValue = v;
}

walk(document.body);

new MutationObserver(function() {
walk(document.body);
  }).observe(document.body, {
    childList: true
});