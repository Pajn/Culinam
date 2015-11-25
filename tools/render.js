import {readFile} from 'fs';
import jsdom from 'jsdom';
import {renderToString} from 'react-dom/server';
import {match, RoutingContext} from 'react-router';
import {routes} from '../.tmp/ts/index.js';

match({routes: routes(), location: '/shell'}, (error, redirectLocation, renderProps) => {
  jsdom.env({
    file: './app/index.html',
    done:  (err, window) => {
      const rendered = renderToString(<RoutingContext {...renderProps} />);
      window.document.getElementById('app').innerHTML = rendered;

      console.log(window.document.documentElement.outerHTML);
    }
  });
});
