import "../styles/index.css";

import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";
import AnimatedNumber from '@stimulus-components/animated-number';

const application = Application.start();

const context = require.context("../controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

application.register('animated-number', AnimatedNumber);
