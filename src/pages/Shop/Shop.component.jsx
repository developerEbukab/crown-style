import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import {selectCollections} from "../../redux/shop/shop.selectors"

const Shop = ({collections}) => {
  return (
    <div className="shop-page">
      <CollectionsOverview/>
    </div>
  );
}

export default Shop;
