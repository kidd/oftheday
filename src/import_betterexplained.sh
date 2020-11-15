runcached curl https://betterexplained.com/archives/ | pup 'div.post-content .egs-posts-item-title json{}' | jq '[.[] | {href, text}]'
