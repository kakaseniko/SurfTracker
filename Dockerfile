FROM kong/deck
 
COPY entrypoint.sh /entrypoint.sh

COPY kong.yaml /kong.yaml
 
ENTRYPOINT [ "/entrypoint.sh" ]
