# Sunrise Components

This is another component library. You can use it with Vue.
```
<marketing-talk>
It's build with the power of the inspiring sunrises I experienced 
whenever I woke up at 5 am. Often it was build around 5am...
So beautiful, so inspiring, blah blah.
I need coffee.
</marketing-talk>
```

Have fun!

---
So, let's get serious.

Sunrise by 5amco.de is a Vue component library written in Typescript. It's based on TailwindCSS and focused on minimal, beautiful design. You can use the growing number of components as a standalone library or extend your existing application design - Sunrise Components are lightly opinionated, but very flexible. For detailed used information, see the documentation on the website.

## Usage

### Prerequisites
Have your Vue project up and running on Typescript!
Next up, you should install and setup Tailwind via npm like described in
their docs. After that, if you haven't done it yet, you should create a
Tailwind configuration file - this is also well documented in the
documentation. Sunrise is using handcrafted, custom colors for the unique
design, so please extend (or merge) your Tailwind configuration file with
the configuration below.
And a sip of your favorite hot beverage is always a great idea. ☕️ 🍵

### via npm
The easiest way to use Sunrise Components is to install via npm.

```
npm i @5amcode/sunrise-components
```

#### Adjust `tailwind.config.js`

After this, you should merge your own tailwind.config.js file with the one given in the repository. This configuration contains the custom colors, additional utility classes and more.

If you want to use the full Sunrise Design - and we highly recommend this! - note that you have to install or embed the Fonts [Open Sans](https://fonts.google.com/specimen/Open+Sans) (used as standard font), [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro) (headlines) and [Source Serif Pro](https://fonts.google.com/specimen/Source+Serif+Pro) (oblique, fancy text stuff ✨). As of today, the usage of the fonts is free, but you should double-check with your own requirements before installing them. You can use your own fonts as well, just tweak the font-properties in your `tailwind.config.js`:

```
...
// theme fonts
fontFamily: {
    'display': ["'Source Sans Pro'"], // headlines
    'sans': ["'Open Sans'"], // standard text
    'oblique': ["'Source Serif Pro'"], // oblique, fancy text
},
...
```

Recompile your CSS and you're done! 🚀

#### Icons
Sunrise uses the SVG versions of [Heroicons](https://heroicons.com/) for a clean look and feel. If you're using Fontawesome or another icon set, replace the icons in the following components to match yours: `STypoQuote.vue`. 

### Copy & Paste
This is the best approach if you don't need all components of the package.
You can copy the source code of the components you want and create them as own files in your Vue project. Please note that you still have to extend your `tailwind.config.js` file for correct rendering (see section above).


### Questions, bug reports, feature requests?
There you [go](https://github.com/5am-code/sunrise/issues)!
