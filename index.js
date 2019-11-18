const core = require('@actions/core');
const github = require('@actions/github');
const spawn = require('cross-spawn');

try {
    const file_tgz = core.getInput('file_tgz');
    spawnSync('npm', ['install']);
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}