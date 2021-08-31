module.exports = function(app) {
  app.get('/cheap_checkout', function (req, res){
    res.render('cheap_checkout', {
      title: "",
      bananas_field: "hidden",
      broccoli_field: "hidden",
      chicken_field: "hidden",
      grapefruit_field: "hidden",
      lemons_field: "hidden",
      lettuce_field: "hidden",
      oranges_field: "hidden",
      pork_field: "hidden",
      potatoes_field: "hidden",
      steak_field: "hidden",
      tomatoes_field: "hidden",
      turkey_field: "hidden"
    });
  });

  var products =
  {
    bananas:
    {
      price:0.87,
      category:"fruit"
    },
    broccoli:
    {
      price:1.39,
      category:"vegetable"
    },
    candy_canes:
    {
      price:3.51,
      category:"sweet"
    },
    canola_oil:
    {
      price:2.28,
      category:"oil"
    },
    cereal:
    {
      price:4.19,
      category:"grain"
    },
    cheese:
    {
      price:4.49,
      category:"dairy"
    },
    chicken:
    {
      price:1.99,
      category:"protein"
    },
    chocolate_bar:
    {
      price:2.10,
      category:"sweet"
    },
    chocolate_milk:
    {
      price:5.68,
      category:"diary"
    },
    coffee_beans:
    {
      price:7.85,
      category:"other"
    },
    cookies:
    {
      price:2.00,
      category:"sweet"
    },
    deodorant:
    {
      price:3.97,
      category:"care product"
    },
    fruit_punch:
    {
      price:2.08,
      category:"sweet"
    },
    grape_jelly:
    {
      price:2.98,
      category:"sweet"
    },
    grapefruit:
    {
      price:1.08,
      category:"fruit"
    },
    gum:
    {
      price:1.12,
      category:"sweet"
    },
    honey:
    {
      price:8.25,
      category:"sweet"
    },
    ketchup:
    {
      price:3.59,
      category:"other"
    },
    lemons:
    {
      price:1.74,
      category:"fruit"
    },
    lettuce:
    {
      price:1.10,
      category:"vegetable"
    },
    lollipops:
    {
      price:2.61,
      category:"sweet"
    },
    lotion:
    {
      price:7.97,
      category:"care product"
    },
    mayonnaise:
    {
      price:3.99,
      category:"oil"
    },
    mints:
    {
      price:6.39,
      category:"sweet"
    },
    mustard:
    {
      price:2.36,
      category:"other"
    },
    oranges:
    {
      price:0.80,
      category:"fruit"
    },
    paper_towels:
    {
      price:9.46,
      category:"care product"
    },
    pasta_sauce:
    {
      price:2.30,
      category:"vegetable"
    },
    peanut_butter:
    {
      price:5.00,
      category:"protein"
    },
    pork:
    {
      price:4.14,
      category:"protein"
    },
    potato_chips:
    {
      price:3.25,
      category:"oil"
    },
    potatoes:
    {
      price:0.68,
      category:"vegetable"
    },
    shampoo:
    {
      price:4.98,
      category:"care product"
    },
    socks:
    {
      price:6.97,
      category:"other"
    },
    soda:
    {
      price:2.05,
      category:"sweet"
    },
    spaghetti:
    {
      price:2.92,
      category:"grain"
    },
    steak:
    {
      price:4.97,
      category:"protein"
    },
    sugar:
    {
      price:2.08,
      category:"sweet"
    },
    tea:
    {
      price:2.35,
      category:"water"
    },
    tissues:
    {
      price:3.94,
      category:"care product"
    },
    tomatoes:
    {
      price:1.80,
      category:"fruit"
    },
    toothpaste:
    {
      price:2.50,
      category:"care product"
    },
    turkey:
    {
      price:2.98,
      category:"protein"
    },
    water_bottles:
    {
      price:9.37,
      category:"water"
    },
    white_bread:
    {
      price:2.43,
      category:"grain"
    },
    white_milk:
    {
      price:3.62,
      category:"dairy"
    }
  };

  var lb_array = ["bananas", "broccoli", "chicken", "grapefruit", "lemons", "lettuce", "oranges", "pork", "potatoes", "steak", "tomatoes", "turkey"];

  var btnpressed = [];
  var render_fields = ["hidden", "hidden", "hidden", "hidden", "hidden", "hidden", "hidden", "hidden", "hidden", "hidden", "hidden", "hidden"];

  var lb = [];

  var d = new Date();
  var day = d.getDay();

  function checkPerLB() {
    for (var i=0; i<btnpressed.length; i++) {
      if (lb_array.indexOf(btnpressed[i]) != -1) {
        render_fields[lb_array.indexOf(btnpressed[i])] = "float";
        lb.push(btnpressed[i]);
      }
    }
  }

  function calculatePrice() {
    var total = 0.00;
    var shoppinglist = {};
    for (var i=0; i<btnpressed.length; i++) {
      //check if in lb
      if (lb.indexOf(btnpressed[i]) != -1) {
        //present -> apply weight
      } else {
        //not present
        shoppinglist[i+1]['name'] = products[btnpressed[i]];
        shoppinglist[i+1]['price'] = products[btnpressed[i]['price']];
        shoppinglist[i+1]['cat'] = products[btnpressed[i]['category']]
      }
      console.log(shoppinglist);
      //console.log(products[btnpressed[i]]['price']);
    }
    switch (day) {
      case 0:
        //Sunday
        break;
      case 1:
        //Monday
        break;
      case 2:
        //Tuesday
        break;
      case 3:
        //Wednesday
        break;
      case 4:
        //Thursday
        break;
      case 5:
        //Friday
        break;
      case 6:
        //Saturday
        break;
    }
  }

  app.post('/cheap_checkout', function (req, res) {

    /*var size = 0, key;
    for (key in products) {
      console.log('if (req.body.'+key+' == "'+key+'") {\n\tbtnpressed.push('+key+');\n}');
    }*/

    if (req.body.bananas == "bananas") {
      btnpressed.push('bananas');
    }
    if (req.body.broccoli == "broccoli") {
      btnpressed.push('broccoli');
    }
    if (req.body.candy_canes == "candy_canes") {
      btnpressed.push('candy_canes');
    }
    if (req.body.canola_oil == "canola_oil") {
      btnpressed.push('canola_oil');
    }
    if (req.body.cereal == "cereal") {
      btnpressed.push('cereal');
    }
    if (req.body.cheese == "cheese") {
      btnpressed.push('cheese');
    }
    if (req.body.chicken == "chicken") {
      btnpressed.push('chicken');
    }
    if (req.body.chocolate_bar == "chocolate_bar") {
      btnpressed.push('chocolate_bar');
    }
    if (req.body.chocolate_milk == "chocolate_milk") {
      btnpressed.push('chocolate_milk');
    }
    if (req.body.coffee_beans == "coffee_beans") {
      btnpressed.push('coffee_beans');
    }
    if (req.body.cookies == "cookies") {
      btnpressed.push('cookies');
    }
    if (req.body.deodorant == "deodorant") {
      btnpressed.push('deodorant');
    }
    if (req.body.fruit_punch == "fruit_punch") {
      btnpressed.push('fruit_punch');
    }
    if (req.body.grape_jelly == "grape_jelly") {
      btnpressed.push('grape_jelly');
    }
    if (req.body.grapefruit == "grapefruit") {
      btnpressed.push('grapefruit');
    }
    if (req.body.gum == "gum") {
      btnpressed.push('gum');
    }
    if (req.body.honey == "honey") {
      btnpressed.push('honey');
    }
    if (req.body.ketchup == "ketchup") {
      btnpressed.push('ketchup');
    }
    if (req.body.lemons == "lemons") {
      btnpressed.push('lemons');
    }
    if (req.body.lettuce == "lettuce") {
      btnpressed.push('lettuce');
    }
    if (req.body.lollipops == "lollipops") {
      btnpressed.push('lollipops');
    }
    if (req.body.lotion == "lotion") {
      btnpressed.push('lotion');
    }
    if (req.body.mayonnaise == "mayonnaise") {
      btnpressed.push('mayonnaise');
    }
    if (req.body.mints == "mints") {
      btnpressed.push('mints');
    }
    if (req.body.mustard == "mustard") {
      btnpressed.push('mustard');
    }
    if (req.body.oranges == "oranges") {
      btnpressed.push('oranges');
    }
    if (req.body.paper_towels == "paper_towels") {
      btnpressed.push('paper_towels');
    }
    if (req.body.pasta_sauce == "pasta_sauce") {
      btnpressed.push('pasta_sauce');
    }
    if (req.body.peanut_butter == "peanut_butter") {
      btnpressed.push('peanut_butter');
    }
    if (req.body.pork == "pork") {
      btnpressed.push('pork');
    }
    if (req.body.potato_chips == "potato_chips") {
      btnpressed.push('potato_chips');
    }
    if (req.body.potatoes == "potatoes") {
      btnpressed.push('potatoes');
    }
    if (req.body.shampoo == "shampoo") {
      btnpressed.push('shampoo');
    }
    if (req.body.socks == "socks") {
      btnpressed.push('socks');
    }
    if (req.body.soda == "soda") {
      btnpressed.push('soda');
    }
    if (req.body.spaghetti == "spaghetti") {
      btnpressed.push('spaghetti');
    }
    if (req.body.steak == "steak") {
      btnpressed.push('steak');
    }
    if (req.body.sugar == "sugar") {
      btnpressed.push('sugar');
    }
    if (req.body.tea == "tea") {
      btnpressed.push('tea');
    }
    if (req.body.tissues == "tissues") {
      btnpressed.push('tissues');
    }
    if (req.body.tomatoes == "tomatoes") {
      btnpressed.push('tomatoes');
    }
    if (req.body.toothpaste == "toothpaste") {
      btnpressed.push('toothpaste');
    }
    if (req.body.turkey == "turkey") {
      btnpressed.push('turkey');
    }
    if (req.body.water_bottles == "water_bottles") {
      btnpressed.push('water_bottles');
    }
    if (req.body.white_bread == "white_bread") {
      btnpressed.push('white_bread');
    }
    if (req.body.white_milk == "white_milk") {
      btnpressed.push('white_milk');
    }

    if (req.body.checklb == "Check") {
      checkPerLB();
    }

    if (req.body.submit == "Calculate") {
      calculatePrice();
    }

    res.render('cheap_checkout', {
      title: "",
      bananas_field: render_fields[0],
      broccoli_field: render_fields[1],
      chicken_field: render_fields[2],
      grapefruit_field: render_fields[3],
      lemons_field: render_fields[4],
      lettuce_field: render_fields[5],
      oranges_field: render_fields[6],
      pork_field: render_fields[7],
      potatoes_field: render_fields[8],
      steak_field: render_fields[9],
      tomatoes_field: render_fields[10],
      turkey_field: render_fields[11]
    });
  });
}
