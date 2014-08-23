#What is this?
Yet another chat created with nodejs and socket.io

#Why?

Two reasons - socket scalability research and play with lovely [React](http://facebook.github.io/react/)

#How?

Simple. [Socket.io](http://socket.io/) can use [redis storage](http://redis.io/) to store information about connections, rooms, etc. This makes system extremely scalable -> You can run this chat on 9000 machines with 9000 processes simultaneosly, and it will work.

**What about rooms?**
They are dynamic. No pre-defined rooms. You can create room and will be able to remove it(maybe sometime)

#Roadmap

Authorizations. Really need taht
