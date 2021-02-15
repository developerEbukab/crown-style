import React from 'react';
import "./Collection.styles.scss";
import { connect } from 'react-redux';
import CollectionItem from '../../components/CollectionItem/CollectionItem.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

const Collection = ({ collection }) => {
  console.log("COLLECTION",collection )
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => <CollectionItem key={items.id} item={item}/>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);
