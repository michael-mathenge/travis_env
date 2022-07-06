const NEXT_JOB = process.env.NAME;


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log(`Next job: ${NEXT_JOB}`);
    await sleep(5000);
  }
}

main();
