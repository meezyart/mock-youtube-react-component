import React from 'react';

const VideListItem = ({video,onVideoSelect}) => {
    const imageUrl  = video.snippet.thumbnails.default.url,
          snippet  = video.snippet;

    return (
        <li onClick={()=> onVideoSelect(video)} className="list-group-item">
           <div className="video-list media">
              <div className="media-left">
                  <img className="media-object" src={imageUrl} alt={snippet.description}/>
              </div>
            <div className="media-body">
                <div className="media-heading">{snippet.title}</div>
            </div>
           </div>
        </li>
    );
};

export default VideListItem;
