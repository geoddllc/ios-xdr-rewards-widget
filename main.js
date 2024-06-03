// Script to fetch XDR to ICP rate, ICP to USD rate, and display all in a widget
async function fetchRates() {
    const xdrRateUrl = "https://ic-api.internetcomputer.org/api/v3/avg-icp-xdr-conversion-rates";
    const usdRateUrl = "https://api.coingecko.com/api/v3/simple/price?ids=internet-computer&vs_currencies=usd";
    
    // Fetch XDR to ICP rate
    const xdrRequest = new Request(xdrRateUrl);
    const xdrResponse = await xdrRequest.loadJSON();
    const xdrRate = xdrResponse.avg_icp_xdr_conversion_rates[0][1] / 10000;

    // Fetch ICP to USD rate
    const usdRequest = new Request(usdRateUrl);
    const usdResponse = await usdRequest.loadJSON();
    const icpToUsdRate = usdResponse['internet-computer'].usd;

    return { xdrRate, icpToUsdRate };
}

async function createWidget(xdrRate, icpToUsdRate) {
    let widget = new ListWidget();
    const xdrAmount = 0;  // Static XDR amount
    const icpAmount = xdrAmount / xdrRate;  // Calculate ICP amount

    // Display XDR amount and rate
    let xdrRateText = widget.addText(`${xdrRate.toFixed(4)} ICP/XDR`);
    xdrRateText.textColor = Color.gray();
    xdrRateText.textOpacity = 0.7;
    xdrRateText.font = Font.systemFont(12);

    // Larger text for ICP
    let icpText = widget.addText(`${icpAmount.toFixed(2)} ICP`);
    icpText.font = Font.boldSystemFont(16);

    // Display ICP to USD conversion
    let usdText = widget.addText(`$${(icpAmount * icpToUsdRate).toFixed(2)}`);
    usdText.font = Font.boldSystemFont(20);

    return widget;
}

async function run() {
    const { xdrRate, icpToUsdRate } = await fetchRates();
    const widget = await createWidget(xdrRate, icpToUsdRate);
    Script.setWidget(widget);
    Script.complete();
    widget.presentSmall();
}

run();
