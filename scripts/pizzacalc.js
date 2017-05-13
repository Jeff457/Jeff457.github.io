$(function() {
  $(".dropdown-chain-selection").on('click', 'a', function() {
    $("#pizza-chain").text($(this).text());
    $(".table tr").removeClass("highlight");
    $(".chain-btn-row").remove();
    chainDropdownSize($(this).attr('id'));
    determineSizeSelection();
  });
});

function chainDropdownSize(pizzaChain)
{
  switch(pizzaChain)
  {
    case 'dominos':
      addDominos(true);
      break;
    case 'papa':
      addPapa(true);
      break;
    case 'hut':
      addHut(true);
      break;
    case 'compare':
      compareChains();
      determineChainSelection();
      break;
    case 'nvm':
      revertSizeSelection(true);
      break;
    default:
      break;
  }
}

function addDominos(replaceAll, row)
{
  var dominosDiv = '<div class="dropdown dropdown-size-selection pizza-calc-input" id="size">' + 
            '<button class="btn btn-default dropdown-toggle dropdown-optn-size" type="button" id="dominos-sizes" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Select Size<span class="caret"></span></button>' + 
             '<ul class="dropdown-menu" aria-labelledby="dropdownMenu">' + 
               '<li><a href="javascript:void(0);" id="d-xs">Extra Small</a></li>' + 
               '<li><a href="javascript:void(0);" id="d-s">Small</a></li>' + 
               '<li><a href="javascript:void(0);" id="d-m">Medium</a></li>' +
               '<li><a href="javascript:void(0);" id="d-pan">Pan Pizza</a></li>' +
                '<li><a href="javascript:void(0);" id="d-l">Large</a></li>' + 
                '<li><a href="javascript:void(0);" id="d-xl">Extra Large</a></li>' + 
            '</ul>' + 
          '</div>';
  
  if (replaceAll)
    $(".pizza-calc-input #size").replaceWith(dominosDiv);
  else
    $("tr").eq(row).find("#size").replaceWith(dominosDiv);
}

function addPapa(replaceAll, row)
{
  var papaDiv = '<div class="dropdown dropdown-size-selection pizza-calc-input" id="size">' + 
            '<button class="btn btn-default dropdown-toggle dropdown-optn-size" type="button" id="papa-sizes" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Select Size<span class="caret"></span></button>' + 
             '<ul class="dropdown-menu" aria-labelledby="dropdownMenu">' + 
               '<li><a href="javascript:void(0);" id="pj-xs">Extra Small</a></li>' + 
               '<li><a href="javascript:void(0);" id="pj-s">Small</a></li>' + 
               '<li><a href="javascript:void(0);" id="pj-m">Medium</a></li>' +
                '<li><a href="javascript:void(0);" id="pj-l">Large</a></li>' + 
                '<li><a href="javascript:void(0);" id="pj-xl">Extra Large</a></li>' + 
            '</ul>' + 
          '</div>';
  
  if (replaceAll)
    $(".pizza-calc-input #size").replaceWith(papaDiv);
  else
    $("tr").eq(row).find("#size").replaceWith(papaDiv);
}

function addHut(replaceAll, row)
{
  var hutDiv = '<div class="dropdown dropdown-size-selection pizza-calc-input" id="size">' + 
            '<button class="btn btn-default dropdown-toggle dropdown-optn-size" type="button" id="hut-sizes" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Select Size<span class="caret"></span></button>' + 
             '<ul class="dropdown-menu" aria-labelledby="dropdownMenu">' + 
               '<li><a href="javascript:void(0);" id="ph-s">Small</a></li>' + 
               '<li><a href="javascript:void(0);" id="ph-pp">Personal Pan</a></li>' + 
               '<li><a href="javascript:void(0);" id="ph-m">Medium</a></li>' +
               '<li><a href="javascript:void(0);" id="ph-l">Large</a></li>' +
            '</ul>' + 
          '</div>';
  
  if (replaceAll)
    $(".pizza-calc-input #size").replaceWith(hutDiv);
  else
    $("tr").eq(row).find("#size").replaceWith(hutDiv);
}

function compareChains()
{
  var dropdown =
    '<div class="row chain-btn-row"><div class="dropdown dropdown-chain-only-selection">' + 
            '<button class="btn btn-default dropdown-toggle" type="button" id="pizza-chains-only" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Select Chain<span class="caret"></span></button>' + 
             '<ul class="dropdown-menu" aria-labelledby="dropdownMenu">' + 
               '<li><a href="javascript:void(0);" id="dominos">Dominos</a></li>' + 
               '<li><a href="javascript:void(0);" id="papa">Papa Johns</a></li>' + 
               '<li><a href="javascript:void(0);" id="hut">Pizza Hut</a></li>' +
      '<li><a href="javascript:void(0);" id="nvm">Custom</a></li>'              + 
            '</ul>' + 
          '</div></div>';
  var count = 0;
   $(".table tr").each(function() {
     $(dropdown).attr('data-id', count).appendTo(".chain-button");
     count++;
   });
  revertSizeSelection(true);
}

function determineChainSelection()
{
  $(".dropdown-chain-only-selection").on('click', 'a', function() {
    var chain = $(this).text();
    var row = parseInt($(this).parents(".chain-btn-row").attr('data-id'));
    $(this).parents(".dropdown-chain-only-selection").find(".btn").text(chain);
    switch(chain)
    {
      case 'Dominos':
        addDominos(false, row);
        break;
      case 'Papa Johns':
        addPapa(false, row);
        break;
      case 'Pizza Hut':
        addHut(false, row);
        break;
      case'Custom':
        revertSizeSelection(false, row);
        break;
      default:
        break;
    }
    determineSizeSelection();
  });
}

function revertSizeSelection(replaceAll, row)
{
  var customDiv = '<input type="text" class="pizza-input" id="size" name="size" placeholder="inches"/>';
  
  if (replaceAll)
    $(".pizza-calc-input #size").replaceWith(customDiv);
  else
    $("tr").eq(row).find("#size").replaceWith(customDiv);
}

function determineSizeSelection()
{
  $(".dropdown-size-selection").on('click', 'a', function() {
    $(this).parents(".dropdown-size-selection").find(".btn").text($(this).text());
    
    var price = parseFloat($(this).parents("tr").find("#price").val());
    var id = $(this).attr('id');
    
    area = calculateValue(price, id);
    
    if (isNaN(area))
      return;
    
    $(this).parents("tr").find("#value").val(Math.round( (area/price) * 100) / 100);
        $(this).parents("tr").find("#cost").val( Math.round( (price/area) * 100) / 100);
  
    highlightBestValue();
  });
}

function calculateValue(price, size)
{
  let chainSizes = {
    // dominos
    "d-xs": 8,
    "d-s": 10,
    "d-m": 12,
    "d-pan": 12,
    "d-l": 14,
    "d-xl": 16,
    // papa johns
    "pj-xs": 8,
    "pj-s": 10,
    "pj-m": 12,
    "pj-l": 14,
    "pj-xl": 16,
    // pizza hut
    "ph-s": 8,
    "ph-pp": 6,
    "ph-m": 12,
    "ph-l": 14
  };
  var size = chainSizes[size];
  if (isNaN(price))
    return;
  var area = Math.pow(size/2, 2) * Math.PI;
  return area;
}

$(function() {
  $(".table").on('click', 'i', function() {
    $(".fa-plus-square").remove();
    $(".table").append(
      '<tr>' + 
                '<td><input type="text" class="pizza-input" id="price" name="price" placeholder="$"/></td>' +
                '<td><input type="text" class="pizza-input" id="size" name="size" placeholder="inches"/></td>' + 
                '<td><input type="text" class="pizza-input" id="value" name="value" placeholder="in&#0178/$" readonly/></td>' + 
                '<td><input type="text" class="pizza-input" id="cost" name="cost" placeholder="$/in&#0178" readonly/></td>' + 
                '<td id="add-row"><a href="javascript:void(0);" class="add-more"><i class="fa fa-plus-square fa-lg" aria-hidden="true"></i></a></td>' + 
              '</tr>');
    
    var chain = $("#pizza-chain").text();
    var chainID = "";
    switch(chain)
    {
      case 'Dominos':
        chainID = "dominos";
        break;
      case 'Papa Johns':
        chainID = "papa";
        break;
      case 'Pizza Hut':
        chainID = "hut";
        break;
      case 'Compare Chains':
        chainID = "compare";
        $(".chain-btn-row").remove();
        break;
      case 'Custom':
        chainID = "nvm";
        break;
      default:
        break;
    }
    chainDropdownSize(chainID);
  });
});

$(function() {
  $("#calculate-pizza-value").on("keydown", function(e) {
    if (e.which == 13) 
    {
      $(".table tr").each(function() {
        var price = parseFloat($(this).find("#price").val());
        var size = parseInt($(this).find("#size").val());
        
        if (isNaN(price) || isNaN(size))
          return;
        
        var area = Math.pow(size/2, 2) * Math.PI;
        $(this).find("#value").val(Math.round( (area/price) * 100) / 100);
        $(this).find("#cost").val( Math.round( (price/area) * 100) / 100);
      });
      highlightBestValue();
    }
  });
});

function highlightBestValue()
{
  var bestValue = 0;
  var bestValueRow;
  $(".table tr").each(function() {
    var value = parseFloat($(this).find("#value").val());
    if (isNaN(value))
      return;
    if (value > bestValue) 
    {
      bestValue = value;
      bestValueRow = $("tr").index(this);
    }
  });
  $(".table tr").removeClass("highlight");
  $(".table tr").eq(bestValueRow).addClass("highlight");
}
