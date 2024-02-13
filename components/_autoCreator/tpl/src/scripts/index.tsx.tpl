import React from 'react';

import scss from './../scss/$[component].scss';

function $[component]() {
  return (
    <div className={scss.$[component-style-name]}>
      $[component]
    </div>
  );
}

export { $[component] };
