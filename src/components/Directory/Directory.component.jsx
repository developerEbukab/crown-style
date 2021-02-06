import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem.component';
import "./Directory.styles.scss";

class Directory extends Component {
  state = {sections: [
    {
      title: 'hats',
      imageUrl: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://images.unsplash.com/photo-1599681906464-ec599150575b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fGphY2tldHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://images.unsplash.com/photo-1601903076298-e1bac19f6dad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxzbmVha2Vyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]};
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...otherSectionProps }) => <MenuItem key={id} {...otherSectionProps} />)}
      </div>
    );
  }
}

export default Directory;
