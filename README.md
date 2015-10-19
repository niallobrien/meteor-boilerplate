# Meteor Boilerplate


## Installation
Simply clone this repo into a directory and run `meteor` inside that directory.

For example:

    git clone git@github.com:juliancwirko/meteor-zf5.git my-awesome-meteor-app
   
    cd my-awesome-meteor-app
   
    meteor

Or: `git clone git@github.com:juliancwirko/meteor-zf5.git my-awesome-meteor-app && cd $_ && meteor`


## Features
This repo uses Flow Router & Blaze Layout.

For the UI, I'm using [Zurb Foundation](http://foundation.zurb.com) via the [ZF5 package](https://github.com/juliancwirko/meteor-zf5/).

Having used many UI frameworks over the years, I find that Foundation offers the greatest amount of flexibility; it has just enough basic styles for putting together a presentable prototype, but doesn't get in the way when trying to implement a custom design to suit your app.  
This is paramount for me, as other frameworks (Bootstrap, Semantic UI etc.) tend to dictate the look & feel of your app too much for my liking and you end up fighting them.  
The repo also implements Accounts UI & User Accounts with pre-configured account setup functionality(register, log in, log out etc.) styled for Zurb Foundation.

[See the repo](https://github.com/juliancwirko/meteor-zf5/) for Foundation JS information.


## Included Packages
I haven't removed any Meteor specific packages from this repo, simply added some of my own. For example, I often like to use Stylus over Sass, but I've also left Less in place. The main benefit to using Sass, is that you can make use Foundation's component structure, variables, mixins etc.  
If using Stylus or Less, I advise you `@import foundation.css` before any custom styles.

***

Also note that [Astronomy](https://github.com/jagi/meteor-astronomy) is included here, along with [collection-helpers](https://github.com/dburles/meteor-collection-helpers) and [collection-hooks](https://github.com/matb33/meteor-collection-hooks). Feel free to remove anything you don't use in your own project.

***

### Package Reference

- accounts-base
- accounts-password
- accounts-ui
- accounts-ui-unstyled
- [alanning:roles](https://github.com/alanning/meteor-roles)
- [aldeed:autoform](https://github.com/aldeed/meteor-autoform)
- [aldeed:collection2](https://github.com/aldeed/meteor-collection2)
- [aldeed:simple-schema](https://github.com/aldeed/meteor-simple-schema)
- [aldeed:template-extension](https://github.com/aldeed/meteor-template-extension)
- [anti:fake](https://github.com/anticoders/meteor-fake/)
- [arillo:flow-router-helpers](https://github.com/arillo/meteor-flow-router-helpers/)
- autoupdate
- babel-compiler4_1
- babel-runtime
- [babrahams:editable-json](https://github.com/JackAdams/meteor-editable-json/)
- base64
- binary-heap
- blaze
- blaze-html-templates
- blaze-tools
- boilerplate-generator
- browser-policy
- browser-policy-common
- browser-policy-content
- browser-policy-framing
- caching-compiler
- caching-html-compiler
- callback-hook
- check
- chuangbo:cookie
- coffeescript0
- cosmos:browserify
- [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers)
- [dburles:mongo-collection-instances](https://github.com/dburles/mongo-collection-instances)
- ddp
- ddp-client
- ddp-common
- ddp-rate-limiter
- ddp-server
- deps
- diff-sequence
- ecmascript
- ecmascript-collections
- ejson
- email
- fastclick
- flemay:less-autoprefixer
- [fortawesome:fontawesome](https://github.com/FortAwesome/Font-Awesome)
- [fourseven:scss@3.4.0-beta1](https://github.com/fourseven/meteor-scss)
- geojson-utils
- hot-code-push
- html-tools
- htmljs
- http
- id-map
- [jagi:astronomy](https://github.com/jagi/meteor-astronomy)
- jagi:astronomy-behaviors
- jagi:astronomy-relations
- jagi:astronomy-validators10
- [jagi:reactive-map](https://github.com/jagi/meteor-reactive-map/)
- jquery
- [juliancwirko:zf5](https://github.com/juliancwirko/meteor-zf5/)
- [kadira:blaze-layout](https://github.com/kadirahq/blaze-layout)
- [kadira:flow-router](https://github.com/kadirahq/flow-router)
- [lai:collection-extensions](https://github.com/rclai/meteor-collection-extensions/)
- launch-screen
- less
- livedata
- localstorage
- logging
- [london:body-class][https://github.com/meteor-london/body-class]
- [matb33:collection-hooks](https://github.com/matb33/meteor-collection-hooks)
- meteor
- meteor-base
- [meteorhacks:fast-render](https://github.com/kadirahq/fast-render)
- meteorhacks:inject-data
- meteorhacks:picker
- [meteorhacks:subs-manager](https://github.com/kadirahq/subs-manager)
- [meteortoys:allthings](https://github.com/MeteorToys/allthings)
- meteortoys:authenticate
- meteortoys:autopub
- meteortoys:hotreload
- meteortoys:listen
- meteortoys:method
- meteortoys:pro
- meteortoys:pub
- meteortoys:shell
- meteortoys:status
- meteortoys:sub
- meteortoys:toykit
- meteortoys:toypro
- minifiers
- minimongo
- [mizzao:timesync](https://github.com/mizzao/meteor-timesync)
- [mizzao:user-status](https://github.com/mizzao/meteor-user-status)
- mobile-experience
- mobile-status-bar
- [momentjs:moment](https://github.com/moment/moment/)
- mongo
- mongo-id
- msavin:jetsetter
- msavin:mongol
- npm-bcrypt
- npm-mongo9
- observe-sequence
- [ongoworks:security](https://github.com/ongoworks/meteor-security)
- ordered-dict
- [percolate:paginated-subscription](https://github.com/percolatestudio/paginated-subscription)
- promise
- random
- rate-limit
- [reactive-dict](https://atmospherejs.com/meteor/reactive-dict)
- [reactive-var](https://atmospherejs.com/meteor/reactive-var)
- reload
- retry
- [reywood:publish-composite](https://github.com/englue/meteor-publish-composite)
- routepolicy
- service-configuration
- session
- sha
- softwarerero:accounts-t9n
- spacebars
- spacebars-compiler
- srp
- standard-minifiers
- stylus
- templating
- templating-tools
- tracker
- ui
- underscore
- url
- useraccounts:core
- [useraccounts:flow-routing](https://github.com/meteor-useraccounts/flow-routing)
- [useraccounts:foundation](https://github.com/meteor-useraccounts/foundation)
- webapp
- webapp-hashing
- [zimme:active-route](https://github.com/zimme/meteor-active-route)

### Package Link Reference
- [alanning:roles](https://github.com/alanning/meteor-roles)
- [aldeed:autoform](https://github.com/aldeed/meteor-autoform)
- [aldeed:collection2](https://github.com/aldeed/meteor-collection2)
- [aldeed:simple-schema](https://github.com/aldeed/meteor-simple-schema)
- [aldeed:template-extension](https://github.com/aldeed/meteor-template-extension)
- [anti:fake](https://github.com/anticoders/meteor-fake/)
- [arillo:flow-router-helpers](https://github.com/arillo/meteor-flow-router-helpers/)
- [babrahams:editable-json](https://github.com/JackAdams/meteor-editable-json/)
- [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers)
- [dburles:mongo-collection-instances](https://github.com/dburles/mongo-collection-instances)
- [fortawesome:fontawesome](https://github.com/FortAwesome/Font-Awesome)
- [fourseven:scss@3.4.0-beta1](https://github.com/fourseven/meteor-scss)
- [jagi:astronomy](https://github.com/jagi/meteor-astronomy)
- [jagi:reactive-map](https://github.com/jagi/meteor-reactive-map/)
- [juliancwirko:zf5](https://github.com/juliancwirko/meteor-zf5/)
- [kadira:blaze-layout](https://github.com/kadirahq/blaze-layout)
- [kadira:flow-router](https://github.com/kadirahq/flow-router)
- [lai:collection-extensions](https://github.com/rclai/meteor-collection-extensions/)
- [london:body-class](https://github.com/meteor-london/body-class)
- [matb33:collection-hooks](https://github.com/matb33/meteor-collection-hooks)
- [meteorhacks:fast-render](https://github.com/kadirahq/fast-render)
- [meteorhacks:subs-manager](https://github.com/kadirahq/subs-manager)
- [meteortoys:allthings](https://github.com/MeteorToys/allthings)
- [mizzao:timesync](https://github.com/mizzao/meteor-timesync)
- [mizzao:user-status](https://github.com/mizzao/meteor-user-status)
- [momentjs:moment](https://github.com/moment/moment/)
- [ongoworks:security](https://github.com/ongoworks/meteor-security)
- [percolate:paginated-subscription](https://github.com/percolatestudio/paginated-subscription)
- [reactive-dict](https://atmospherejs.com/meteor/reactive-dict)
- [reactive-var](https://atmospherejs.com/meteor/reactive-var)
- [reywood:publish-composite](https://github.com/englue/meteor-publish-composite)
- [useraccounts:flow-routing](https://github.com/meteor-useraccounts/flow-routing)
- [useraccounts:foundation](https://github.com/meteor-useraccounts/foundation)
- [zimme:active-route](https://github.com/zimme/meteor-active-route)