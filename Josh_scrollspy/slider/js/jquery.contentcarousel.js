

(function(jq) {
	var	aux		= {
			// navigates left / right
			navigate	: function( dir, jqel, jqwrapper, opts, cache ) {
				
				var scroll		= opts.scroll,
					factor		= 1,
					idxClicked	= 0;
					
				if( cache.expanded ) {
					scroll		= 1; // scroll is always 1 in full mode
					factor		= 3; // the width of the expanded item will be 3 times bigger than 1 collapsed item	
					idxClicked	= cache.idxClicked; // the index of the clicked item
				}
				
				// clone the elements on the right / left and append / prepend them according to dir and scroll
				if( dir === 1 ) {
					jqwrapper.find('div.ca-item:lt(' + scroll + ')').each(function(i) {
						jq(this).clone(true).css( 'left', ( cache.totalItems - idxClicked + i ) * cache.itemW * factor + 'px' ).appendTo( jqwrapper );
					});
				}
				else {
					var jqfirst	= jqwrapper.children().eq(0);
					
					jqwrapper.find('div.ca-item:gt(' + ( cache.totalItems  - 1 - scroll ) + ')').each(function(i) {
						// insert before jqfirst so they stay in the right order
						jq(this).clone(true).css( 'left', - ( scroll - i + idxClicked ) * cache.itemW * factor + 'px' ).insertBefore( jqfirst );
					});
				}
				
				// animate the left of each item
				// the calculations are dependent on dir and on the cache.expanded value
				jqwrapper.find('div.ca-item').each(function(i) {
					var jqitem	= jq(this);
					jqitem.stop().animate({
						left	:  ( dir === 1 ) ? '-=' + ( cache.itemW * factor * scroll ) + 'px' : '+=' + ( cache.itemW * factor * scroll ) + 'px'
					}, opts.sliderSpeed, opts.sliderEasing, function() {
						if( ( dir === 1 && jqitem.position().left < - idxClicked * cache.itemW * factor ) || ( dir === -1 && jqitem.position().left > ( ( cache.totalItems - 1 - idxClicked ) * cache.itemW * factor ) ) ) {
							// remove the item that was cloned
							jqitem.remove();
						}						
						cache.isAnimating	= false;
					});
				});
				
			},
			// opens an item (animation) -> opens all the others
			openItem	: function( jqwrapper, jqitem, opts, cache ) {
				cache.idxClicked	= jqitem.index();
				// the item's position (1, 2, or 3) on the viewport (the visible items) 
				cache.winpos		= aux.getWinPos( jqitem.position().left, cache );
				jqwrapper.find('div.ca-item').not( jqitem ).hide();
				jqitem.find('div.ca-content-wrapper').css( 'left', cache.itemW + 'px' ).stop().animate({
					width	: cache.itemW * 2 + 'px',
					left	: cache.itemW + 'px'
				}, opts.itemSpeed, opts.itemEasing)
				.end()
				.stop()
				.animate({
					left	: '0px'
				}, opts.itemSpeed, opts.itemEasing, function() {
					cache.isAnimating	= false;
					cache.expanded		= true;
					
					aux.openItems( jqwrapper, jqitem, opts, cache );
				});
						
			},
			// opens all the items
			openItems	: function( jqwrapper, jqopenedItem, opts, cache ) {
				var openedIdx	= jqopenedItem.index();
				
				jqwrapper.find('div.ca-item').each(function(i) {
					var jqitem	= jq(this),
						idx		= jqitem.index();
					
					if( idx !== openedIdx ) {
						jqitem.css( 'left', - ( openedIdx - idx ) * ( cache.itemW * 3 ) + 'px' ).show().find('div.ca-content-wrapper').css({
							left	: cache.itemW + 'px',
							width	: cache.itemW * 2 + 'px'
						});
						
						// hide more link
						aux.toggleMore( jqitem, false );
					}
				});
			},
			// show / hide the item's more button
			toggleMore	: function( jqitem, show ) {
				( show ) ? jqitem.find('a.ca-more').show() : jqitem.find('a.ca-more').hide();	
			},
			// close all the items
			// the current one is animated
			closeItems	: function( jqwrapper, jqopenedItem, opts, cache ) {
				var openedIdx	= jqopenedItem.index();
				
				jqopenedItem.find('div.ca-content-wrapper').stop().animate({
					width	: '0px'
				}, opts.itemSpeed, opts.itemEasing)
				.end()
				.stop()
				.animate({
					left	: cache.itemW * ( cache.winpos - 1 ) + 'px'
				}, opts.itemSpeed, opts.itemEasing, function() {
					cache.isAnimating	= false;
					cache.expanded		= false;
				});
				
				// show more link
				aux.toggleMore( jqopenedItem, true );
				
				jqwrapper.find('div.ca-item').each(function(i) {
					var jqitem	= jq(this),
						idx		= jqitem.index();
					
					if( idx !== openedIdx ) {
						jqitem.find('div.ca-content-wrapper').css({
							width	: '0px'
						})
						.end()
						.css( 'left', ( ( cache.winpos - 1 ) - ( openedIdx - idx ) ) * cache.itemW + 'px' )
						.show();
						
						// show more link
						aux.toggleMore( jqitem, true );
					}
				});
			},
			// gets the item's position (1, 2, or 3) on the viewport (the visible items)
			// val is the left of the item
			getWinPos	: function( val, cache ) {
				switch( val ) {
					case 0 					: return 1; break;
					case cache.itemW 		: return 2; break;
					case cache.itemW * 2 	: return 3; break;
				}
			}
		},
		methods = {
			init 		: function( options ) {
				
				if( this.length ) {
					
					var settings = {
						sliderSpeed		: 500,			// speed for the sliding animation
						sliderEasing	: 'easeOutExpo',// easing for the sliding animation
						itemSpeed		: 500,			// speed for the item animation (open / close)
						itemEasing		: 'easeOutExpo',// easing for the item animation (open / close)
						scroll			: 1				// number of items to scroll at a time
					};
					
					return this.each(function() {
						
						// if options exist, lets merge them with our default settings
						if ( options ) {
							jq.extend( settings, options );
						}
						
						var jqel 			= jq(this),
							jqwrapper		= jqel.find('div.ca-wrapper'),
							jqitems			= jqwrapper.children('div.ca-item'),
							cache			= {};
						
						// save the with of one item	
						cache.itemW			= jqitems.width();
						// save the number of total items
						cache.totalItems	= jqitems.length;
						
						// add navigation buttons
						if( cache.totalItems > 3 )	
							jqel.prepend('<div class="ca-nav"><span class="ca-nav-prev">Previous</span><span class="ca-nav-next">Next</span></div>')	
						
						// control the scroll value
						if( settings.scroll < 1 )
							settings.scroll = 1;
						else if( settings.scroll > 3 )
							settings.scroll = 3;	
						
						var jqnavPrev		= jqel.find('span.ca-nav-prev'),
							jqnavNext		= jqel.find('span.ca-nav-next');
						
						// hide the items except the first 3
						jqwrapper.css( 'overflow', 'hidden' );
						
						// the items will have position absolute 
						// calculate the left of each item
						jqitems.each(function(i) {
							jq(this).css({
								position	: 'absolute',
								left		: i * cache.itemW + 'px'
							});
						});
						
						// click to open the item(s)
						jqel.find('a.ca-more').live('click.contentcarousel', function( event ) {
							if( cache.isAnimating ) return false;
							cache.isAnimating	= true;
							jq(this).hide();
							var jqitem	= jq(this).closest('div.ca-item');
							aux.openItem( jqwrapper, jqitem, settings, cache );
							return false;
						});
						
						// click to close the item(s)
						jqel.find('a.ca-close').live('click.contentcarousel', function( event ) {
							if( cache.isAnimating ) return false;
							cache.isAnimating	= true;
							var jqitem	= jq(this).closest('div.ca-item');
							aux.closeItems( jqwrapper, jqitem, settings, cache );
							return false;
						});
						
						// navigate left
						jqnavPrev.bind('click.contentcarousel', function( event ) {
							if( cache.isAnimating ) return false;
							cache.isAnimating	= true;
							aux.navigate( -1, jqel, jqwrapper, settings, cache );
						});
						
						// navigate right
						jqnavNext.bind('click.contentcarousel', function( event ) {
							if( cache.isAnimating ) return false;
							cache.isAnimating	= true;
							aux.navigate( 1, jqel, jqwrapper, settings, cache );
						});
						
						// adds events to the mouse
						jqel.bind('mousewheel.contentcarousel', function(e, delta) {
							if(delta > 0) {
								if( cache.isAnimating ) return false;
								cache.isAnimating	= true;
								aux.navigate( -1, jqel, jqwrapper, settings, cache );
							}	
							else {
								if( cache.isAnimating ) return false;
								cache.isAnimating	= true;
								aux.navigate( 1, jqel, jqwrapper, settings, cache );
							}	
							return false;
						});
						
					});
				}
			}
		};
	
	jq.fn.contentcarousel = function(method) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			jq.error( 'Method ' +  method + ' does not exist on jQuery.contentcarousel' );
		}
	};
	
})(jQuery);