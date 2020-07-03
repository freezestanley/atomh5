import React from 'react';

export default (SearchForm, onValuesChange) => {
  if (
    SearchForm
    && SearchForm.prototype
    && SearchForm.prototype.isReactComponent
  ) {
    console.log('SearchForm is class Component');
    return SearchForm;
  }

  if (typeof SearchForm === 'function') {
    console.log('SearchForm is function Component');
    return <SearchForm {...this.props} />;
  }


  return null;
};
