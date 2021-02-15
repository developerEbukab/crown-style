import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import { selectCollections } from "../../redux/shop/shop.selectors";
import Category from '../Collection/Collection.component';

const Shop = ({match}) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview}/>
      <Route path={`${match.path}/:collectionId`} component={Category}/>
    </div>
  );
}

export default Shop;
