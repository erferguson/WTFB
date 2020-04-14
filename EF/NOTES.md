# STUCK?!? Ask > Where is my MAIN AXIS & CROSS-AXIS?

# flex: 1; 
    - takes width available and EVENLY distributes it amongst each FLEX ITEM

# order: (a number)
    - default set to 0(zero)
    - anything greater than zero puts ITEM selected on then END/right

# Flexbox > Alignment & Centering w/ justify-content

    > Justitify-Content how the ITEMS aligned on Main Axis (l to r)
        - Cross Axis (top to bottom)

        -when flex-direction: COLUMN is set, Main Axis (top to bottom) is active

                - ** use > min-height: __vh w/ Column active (?)
        
        - ** Vertically Center:
            display:flex
            flex-direction: column;
            justify-content: center;
            min-height: __vh;

