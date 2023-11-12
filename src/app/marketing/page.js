import Image from "next/image";
// import NavigationBar from "components/NavigationBar";

export default function Home() {
  return (
    <div className="site-container">
      <nav>
        <div className="show-on-desktop">
          <h1>Ether Photo Studio</h1>
          {/* drop down */}
        </div>

        <ul>
          <li>Home</li>
          <li>Website</li>
          <li>CRM</li>
          <li className="on">Marketing</li>
          <li className="show-on-desktop">Invoices</li>
          <li className="show-on-desktop">Money</li>
          <li className="show-on-desktop">Business</li>
          <li className="hide-on-desktop">More</li>
        </ul>
      </nav>
      <main>
        <p>
          Chili pepper lemongrass black bean wraps arugula salad basil maple
          orange tempeh one bowl shallots crunchy seaweed golden cayenne pepper
          red grapes mediterranean vegetables muffins red amazon pepper plums
          winter vegan lychee pasta cranberry spritzer banh mi salad rolls tasty
          smoky maple tempeh glaze lime mango crisp. Figs fresh mint lime taco
          salsa strawberries enchiladas appetizer cashew sparkling pomegranate
          punch Bolivian rainbow pepper sesame soba noodles lavender lemonade
          Thai kale caesar salad falafel bites Bulgarian carrot salted almonds
          hearty crunchy asian pear almond milk chai latte jalapeño hot green
          tea. Ultimate mediterranean cherries summer lentils coconut sugar hemp
          seeds green bowl cocoa hazelnut shiitake chili seasonal zesty tofu pad
          thai matcha Thai sun pepper tomato and basil vine tomatoes kung pao
          pepper ginger tofu Caribbean red habanero black beans cilantro coconut
          milk.
        </p>
        <p>
          Naga viper tabasco pepper summer fruit salad pine nuts chickpea crust
          pizza creamy cauliflower alfredo sauce chia seeds coriander fiery
          fruit four-layer chai tea delightful blueberry scones mocha chocolate
          green onions springtime strawberry vitamin glow soy milk. Chilies soba
          noodles spiced peppermint blast samosa lemon lime minty coconut rice
          with almond milk cozy butternut salad kimchi alfalfa sprouts walnut
          pesto tart instant pot picnic artichoke hearts cilantro lime
          vinaigrette basmati avocado basil pesto green grapes lemon tahini
          dressing walnut mushroom tart sandwiches salty leek.
        </p>
        <p>
          Garlic sriracha noodles cookies rich coconut cream lemonade zest
          banana pinch of yum thyme roasted brussel sprouts bruschetta Italian
          linguine puttanesca açai mediterranean luxury bowl hummus falafel bowl
          toasted hazelnuts strawberry mango smoothie balsamic vinaigrette.
          Blood orange smash simmer kale avocado dressing drizzle cherry bomb
          summertime earl grey latte habanero golden green papaya salad bite
          sized parsley cumin shiitake mushrooms peach strawberry mango smoked
          tofu cozy cinnamon oatmeal picnic salad sriracha pecans guacamole
          candy cane winter apples overflowing berries mangos sweet potato pesto
          portobello mushrooms Italian pepperoncini.
        </p>
        <p>
          Apple vinaigrette ultra creamy avocado pesto ginger lemongrass agave
          green tea roasted peanuts raspberry fizz blueberries potato frosted
          gingerbread bites hearts of palm lemon cinnamon toast tempeh spiced
          pumpkin chili. Udon noodles spring pomegranate dessert bananas
          cauliflower dragon fruit cherry bomb pepper orange chocolate bento box
          dark chocolate butternut mix entree miso dressing.
        </p>
        <p>
          Blueberry pops edamame lemon red lentil soup hummus shaved almonds
          cool cucumbers refreshing cucumber splash crispy iceberg lettuce main
          course crispy coconut mushroom risotto dill sweet potato chocolate
          cookie lime cool off Southern Italian fig arugula cashew salad paprika
          spicy red pepper pineapple salsa Thai curry ginger carrot spiced juice
          grenadillo elderberry. Blackberries oranges Chinese five-spice powder
          Thai super chili seitan crumbled lentils peaches strawberry spinach
          salad creamiest banana bread grapefruit macadamia nut cookies cayenne
          broccoli Sicilian pistachio pesto peppermint eating together.
        </p>
        <p>
          Cinnamon quinoa flatbread avocado couscous second course Malaysian
          dark and stormy citrusy Thai basil curry ghost pepper peanut butter
          crunch fruit smash onion tahini drizzle soup grains green tea lime
          burritos heat sweet potato black bean burrito. Veggie burgers double
          dark chocolate raspberries scotch bonnet pepper farro platter roasted
          butternut squash red lentil curry banana bread edamame hummus mint
          casserole cool red curry tofu noodles cremini mushrooms.
        </p>
        <p>
          Creamy cauliflower alfredo lingonberry tofu black bean chili dip
          comforting pumpkin spice latte Mexican fiesta green pepper fall Indian
          spiced a delicious meal blueberry chia seed jam homemade balsamic
          overflowing apricot seeds street style Thai basil tacos pumpkin miso
          turmeric glazed aubergine sleepy morning tea.
        </p>
        <p>
          Apple vinaigrette ultra creamy avocado pesto ginger lemongrass agave
          green tea roasted peanuts raspberry fizz blueberries potato frosted
          gingerbread bites hearts of palm lemon cinnamon toast tempeh spiced
          pumpkin chili. Udon noodles spring pomegranate dessert bananas
          cauliflower dragon fruit cherry bomb pepper orange chocolate bento box
          dark chocolate butternut mix entree miso dressing.
        </p>
        <p>
          Blueberry pops edamame lemon red lentil soup hummus shaved almonds
          cool cucumbers refreshing cucumber splash crispy iceberg lettuce main
          course crispy coconut mushroom risotto dill sweet potato chocolate
          cookie lime cool off Southern Italian fig arugula cashew salad paprika
          spicy red pepper pineapple salsa Thai curry ginger carrot spiced juice
          grenadillo elderberry. Blackberries oranges Chinese five-spice powder
          Thai super chili seitan crumbled lentils peaches strawberry spinach
          salad creamiest banana bread grapefruit macadamia nut cookies cayenne
          broccoli Sicilian pistachio pesto peppermint eating together.
        </p>

        <button
          type="button"
          className="btn-primary"
          // onClick={closeModal}
        >
          Create promotion
        </button>
      </main>
    </div>
  );
}

