$(function() {
  // use https://www.socscistatistics.com/tests/chisquare/Default2.aspx to check
  function findSig() {
    //display results
    $('.results').removeClass('hidden');
    //clear results
    $('.not-sig, .is-sig').addClass('hidden');
    $('.donut-segment').attr('stroke-dasharray','0,100').attr('stroke','');
    $('.confidence').text('');
    //experiment data
    var sessionA = parseInt($('.sessions-a').val());
    var sessionB = parseInt($('.sessions-b').val());
    var sessionTotal = sessionA + sessionB;
    var conversionA = parseInt($('.conversions-a').val());
    var conversionB = parseInt($('.conversions-b').val());
    var conversionTotal = conversionA + conversionB;
    var conversionRateA = conversionA / sessionA;
    var conversionRateB = conversionB / sessionB;
    var nonConversionA = sessionA - conversionA;
    var nonConversionB = sessionB - conversionB;
    var nonConversionTotal = nonConversionA + nonConversionB;

    //expected data
    var expectedConversionA = (conversionTotal * sessionA) / sessionTotal;
    var expectedConversionB = (conversionTotal * sessionB) / sessionTotal;
    var expectedNonConversionA = sessionA - expectedConversionA;
    var expectedNonConversionB = sessionB - expectedConversionB;
    //math stuff
    var degreeFreedom = 1;
    var differenceA = conversionA - expectedConversionA;
    var differenceB = conversionB - expectedConversionB;
    var chiSq = ((Math.pow(differenceA,2)) / expectedConversionA) + ((Math.pow(differenceA,2)) / expectedConversionB);
    // got from https://www.medcalc.org/manual/chi-square-table.php DF = 1
    var sig20 = 1.642;
    var sig10 = 2.706;
    var sig5 = 3.841;
    var confidence;

    if (chiSq > sig5) {
      confidence = 95;
      $('.is-sig,.sig-chart').removeClass('hidden');
      $('.confidence').text(confidence+'%');
      $('.donut-segment').attr('stroke-dasharray',confidence+',100').attr('stroke','#26a65b');
    } else if (chiSq > sig10) {
      confidence = 90;
      confidenceDiff = 100 - confidence;
      $('.is-sig,.sig-chart').removeClass('hidden');
      $('.confidence').text(confidence+'%');
      $('.donut-segment').attr('stroke-dasharray',confidence+',100').attr('stroke','#e65722');
    } else if (chiSq > sig20) {
      confidence = 80;
      $('.is-sig,.sig-chart').removeClass('hidden');
      $('.confidence').text(confidence+'%');
      $('.donut-segment').attr('stroke-dasharray',confidence+',100').attr('stroke','#dc2a2a');
    } else {
      $('.not-sig').removeClass('hidden');
      $('.sig-chart').addClass('hidden');
    }
    //conversion rate chart
    $('.rate-a').text(Math.round(conversionRateA * 100)+'%');
    $('.rate-b').text(Math.round(conversionRateB * 100)+'%');
    $('.col-a .rate-col').attr('style','width: calc('+Math.round(conversionRateA * 100)+'% + 18px);');
    $('.col-b .rate-col').attr('style','width: calc('+Math.round(conversionRateB * 100)+'% + 18px);');
    if (conversionRateA > conversionRateB && chiSq > sig20) {
      $('.col-container').removeClass('winner');
      $('.col-a').addClass('winner');

    } else if (conversionRateB > conversionRateA && chiSq > sig20) {
      $('.col-container').removeClass('winner');
      $('.col-b').addClass('winner');
    } else {
      $('.col-container').removeClass('winner');
    }
    //URL maker
    $('.url-params').val('http://edcupaioli.com/?sessionA='+sessionA+'&sessionB='+sessionB+'&conversionA='+conversionA+'&conversionB='+conversionB);
  }
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  $('#calc-form').submit(function(e) {
    e.preventDefault();
    findSig();
  });
  $('.url-params').click(function () {
    $(this).select();
  });
  if (window.location.href.indexOf('?sessionA') > -1) {
    $('.sessions-a').val(getParameterByName('sessionA'));
    $('.sessions-b').val(getParameterByName('sessionB'));
    $('.conversions-a').val(getParameterByName('conversionA'));
    $('.conversions-b').val(getParameterByName('conversionB'));
    findSig();
  }
});
