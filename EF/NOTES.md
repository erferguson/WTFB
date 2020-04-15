# STUCK?!? Ask > Where is my MAIN AXIS & CROSS-AXIS?

# flex: 1; 
    - takes width available and EVENLY distributes it amongst each FLEX ITEM

# order: (a number)
    - default set to 0(zero)
    - anything greater than zero puts ITEM selected on then END/right

# Flexbox > Alignment & Centering w/ Justify-Content

    > Justitify-Content how the ITEMS aligned on Main Axis (l to r)
        - Cross Axis (top to bottom)

        -when flex-direction: COLUMN is set, Main Axis (top to bottom) is active

                - ** use > min-height: __vh w/ Column active (?)
        
        - ** Vertically Center:
            display:flex
            flex-direction: column;
            justify-content: center;
            min-height: __vh;

# Flexbox > Alignment & Centering w/ Align-Items
    - concerned with Cross Axis (top to bottom)
    - ** needs > height: __vh

    -VERTICALLY centering

    - baseline: 

    - ex: 
        display:flex;
        height: __vh;
        flex-direction: column;
        align-items: ___

# Flexbox > Alignment & Centering w/ Align-Content
    - concerned with the CROSS AXIS (top to bottom)
        -  Centers VERTICALLY
    - needs > flex-wrap: wrap
    - align-content: stretch === DEFAULT

# Flexbox > Alignment & Centering w/ Align-Self
    - best applied to an individual ITEM rather than CONTAINER
        - apply attributes individually
    
    -this end would OVERRIDE the CONTAINER/parent rule

    -concerned with the CROSS AXIS (t to b)

