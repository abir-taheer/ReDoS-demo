# ReDoS-demo

A project demonstrating how Denial of Service regex attacks work.

## Pre-Requisites

The only software you really need to make this project work is NodeJS.
You can download it here: [https://nodejs.org/en/](https://nodejs.org/en/)

### After cloning the repository

1. Download dependencies

```shell
make install
```

2. Try out the make commands.

| command | description                                                                           |
| ------- | ------------------------------------------------------------------------------------- |
| check   | Will take in a regex and print out whether it is safe                                 |
| demo    | Will take a string and test it against the evil regex to see how long it takes to run |
| server  | Will start up a demo server to emulate a site that is vulnerable to ReDoS             |

### Tips

- For the server, try out values like `10000 seconds`, `2000000 hours`, and `22222222222222333333222 secon`
