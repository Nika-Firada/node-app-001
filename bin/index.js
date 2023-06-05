#! /usr/bin/env node
const states = require("../util/states");
const state = require("../util/state");
const slots = require("../util/slots");
const program = require("commander");

program
    .command('states')
    .description('List down states')
    .action(states)
program
    .command('state <state>')
    .description('Get one state')
    .action(state)
program
    .command('slots <state><date>')
    .description('Get detail info about one state in exact date')
    .action(slots)
program.parse();