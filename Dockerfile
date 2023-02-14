FROM frapsoft/ts-node

COPY / /APP
#COPY /TeaDealer /APP

WORKDIR /APP

EXPOSE 552

ENTRYPOINT [ "npm","test" ]
