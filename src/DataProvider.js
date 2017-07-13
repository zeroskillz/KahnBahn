// just a placeholder for the data fetcher

const project = {
    id: 1452294,
    kind: "project",
    name: "Store Systems Features",
    version: 12933,
    iteration_length: 3,
    week_start_day: "Monday",
    point_scale: "0,1,2,3,5,8,13,21,34,55,89,121",
    point_scale_is_custom: true,
    bugs_and_chores_are_estimatable: true,
    automatic_planning: false,
    enable_tasks: true,
    time_zone: {
      kind: "time_zone",
      olson_name: "America/Chicago",
      offset: "-05:00"
    },
    velocity_averaged_over: 3,
    number_of_done_iterations_to_show: 12,
    has_google_domain: false,
    enable_incoming_emails: true,
    initial_velocity: 10,
    public: false,
    atom_enabled: false,
    project_type: "private",
    start_time: "2016-01-11T06:00:00Z",
    created_at: "2015-10-19T15:35:29Z",
    updated_at: "2017-03-27T13:07:20Z",
    account_id: 25991,
    current_iteration_number: 27,
    enable_following: true,
    wips: {},
    stories:[
      {
          owners: [
              {
                  memberIndex: 32
              }
          ],
          requestor: {
              memberIndex: 7
          },
          kind: "story",
          id: 140702707,
          created_at: "2017-02-27T19:36:35Z",
          updated_at: "2017-07-12T13:59:03Z",
          estimate: 2,
          story_type: "feature",
          name: "Documentation to install all the apps on a 9290 device",
          description: "As a systems support engineer I would like to be able to follow documentation and install all  the apps on 9290 devices so that I can easily prepare 9290 devices for store\n\n__Acceptance Criteria__\n* Documentation can be used to successfully install the apps on the 9290 device\n",
          current_state: "unstarted",
          requested_by_id: 1877718,
          url: "https://www.pivotaltracker.com/story/show/140702707",
          project_id: 1452294,
          owner_ids: [],
          labels: [
              {
                  id: 15698611,
                  project_id: 1452294,
                  kind: "label",
                  name: "9290",
                  created_at: "2016-07-07T16:14:11Z",
                  updated_at: "2016-07-07T16:14:11Z",
                  "$$hashKey": "013"
              }
          ],
          "$$hashKey": "00Y"
      },
      {
          owners: [
              {
                  memberIndex: 32
              }
          ],
          requestor: {
              memberIndex: 13
          },
          kind: "story",
          id: 143273003,
          created_at: "2017-04-06T19:18:59Z",
          updated_at: "2017-07-10T18:11:38Z",
          estimate: 2,
          story_type: "feature",
          name: "Spike - investigate controlling the volume level for error messages and beeps on the 9190 and 9290 ",
          description: "If an incorrect sku is scanned using 9290, since the beep sound is loud, the error message sound is not audible enough to be heard \n\nIf an incorrect sku is scanned using 9190, the error message sound is louder than the beep sound, due to which the beep sound is not at all audible\n\nInvestigate how it can be controlled. \nCreate story (stories) to make the changes.\n\n\n__Acceptance Criteria__\n* Acceptance Criteria 1\n* Acceptance Criteria 2\n",
          current_state: "unstarted",
          requested_by_id: 666695,
          url: "https://www.pivotaltracker.com/story/show/143273003",
          project_id: 1452294,
          owner_ids: [],
          labels: [
              {
                  id: 15698611,
                  project_id: 1452294,
                  kind: "label",
                  name: "9290",
                  created_at: "2016-07-07T16:14:11Z",
                  updated_at: "2016-07-07T16:14:11Z",
                  "$$hashKey": "016"
              }
          ],
          "$$hashKey": "00Z"
      },
      {
        owners:[
          { memberIndex: 19},
          { memberIndex: 7}
        ],
        requestor: {
            memberIndex: 19
        },
        kind: "story",
        id: 147948317,
        created_at: "2017-06-27T18:38:33Z",
        updated_at: "2017-07-13T13:23:36Z",
        accepted_at: "2017-07-10T18:10:58Z",
        estimate: 0,
        story_type: "feature",
        name: "FIgure out 9190/9290 deployment via existing tcsweb page",
        description: "This is a plan B for #142546477",
        current_state: "accepted",
        requested_by_id: 582915,
        url: "https://www.pivotaltracker.com/story/show/147948317",
        project_id: 1452294,
        owner_ids: [
            582915,
            1877718
        ],
        labels: [
            {
                id: 17778027,
                project_id: 1452294,
                kind: "label",
                name: "count-app-1.0.0",
                created_at: "2017-02-24T16:59:20Z",
                updated_at: "2017-02-24T16:59:20Z",
                "$$hashKey": "034"
            },
            {
                id: 18680853,
                project_id: 1452294,
                kind: "label",
                name: "directed-order-pulling-4.2.1",
                created_at: "2017-06-19T20:12:44Z",
                updated_at: "2017-06-19T20:12:44Z",
                "$$hashKey": "035"
            },
            {
                id: 18218499,
                project_id: 1452294,
                kind: "label",
                name: "order-pulling-putaway-4.2.1",
                created_at: "2017-04-17T15:21:57Z",
                updated_at: "2017-04-17T15:21:57Z",
                "$$hashKey": "036"
            },
            {
                id: 18752205,
                project_id: 1452294,
                kind: "label",
                name: "rf-updates-webapp-0.9.0",
                created_at: "2017-06-28T21:20:33Z",
                updated_at: "2017-06-28T21:20:33Z",
                "$$hashKey": "037"
            }
        ],
        owned_by_id: 582915,
        "$$hashKey": "02W"
      },
      {
          owners: [
              {
                  memberIndex: 19
              },
              {
                  memberIndex: 7
              }
          ],
          requestor: {
              memberIndex: 7
          },
          kind: "story",
          id: 141872315,
          created_at: "2017-03-16T14:40:33Z",
          updated_at: "2017-07-12T23:24:17Z",
          estimate: 3,
          story_type: "bug",
          name: "The response time to print the labels on mobile printer from Stockroom app on tomcat is 15-20 seconds longer than the rf guns on weblogic",
          description: "__What It's Doing__\nThe reponse time to print the license id, cut sku label, and consolidate id on the mobile printer (172.20.30.15) is 15-20 seconds longer when printed from stock room app on tomcat rf device vs the weblogic rf device\n\n__What It Should Be Doing__\nThe labels should print instantly same as when using stockroom app on weblogic rf device\n\n__How To Reproduce__\nLog in to stockroom appon  9190 or 9290 pointing to tomcat. Enter ip address of the mobile printer (172.20.30.15).  Pull an order, consolidate and bundle. Notice the lag each time the label is printed on the printer\n",
          current_state: "started",
          requested_by_id: 1877718,
          url: "https://www.pivotaltracker.com/story/show/141872315",
          project_id: 1452294,
          owner_ids: [
              582915,
              1877718
          ],
          labels: [
              {
                  id: 15698611,
                  project_id: 1452294,
                  kind: "label",
                  name: "9290",
                  created_at: "2016-07-07T16:14:11Z",
                  updated_at: "2016-07-07T16:14:11Z",
                  "$$hashKey": "01G"
              },
              {
                  id: 18680853,
                  project_id: 1452294,
                  kind: "label",
                  name: "directed-order-pulling-4.2.1",
                  created_at: "2017-06-19T20:12:44Z",
                  updated_at: "2017-06-19T20:12:44Z",
                  "$$hashKey": "01H"
              }
          ],
          owned_by_id: 582915,
          "$$hashKey": "018"
      },
      {
          owners: [
            {
                memberIndex: 8
            },
            {
                memberIndex: 7
            },
          ],
          requestor: {
              memberIndex: 8
          },
          kind: "story",
          id: 140699681,
          created_at: "2017-02-27T19:00:15Z",
          updated_at: "2017-07-12T18:09:54Z",
          estimate: 2,
          story_type: "feature",
          name: "Modify order print services to use postgres",
          description: "As XXX I want Order Print services to be migrated to use a Postgres DB so that we can reduce the costs of oracle licenses.\n\n__Acceptance Criteria__\n\n",
          current_state: "delivered",
          requested_by_id: 27166,
          url: "https://www.pivotaltracker.com/story/show/140699681",
          project_id: 1452294,
          owner_ids: [
              27166,
              1877718
          ],
          labels: [
              {
                  id: 18528833,
                  project_id: 1452294,
                  kind: "label",
                  name: "order-print-service-3.37.0",
                  created_at: "2017-05-29T14:41:43Z",
                  updated_at: "2017-05-29T14:41:43Z",
                  "$$hashKey": "029"
              },
              {
                  id: 17795189,
                  project_id: 1452294,
                  kind: "label",
                  name: "store-postgres",
                  created_at: "2017-02-27T18:51:47Z",
                  updated_at: "2017-02-27T19:07:37Z",
                  "$$hashKey": "02A"
              }
          ],
          owned_by_id: 27166,
          "$$hashKey": "01Z"
      },
      {
          owners: [
              {
                  memberIndex: 7
              }
          ],
          requestor: {
              memberIndex: 7
          },
          kind: "story",
          id: 148435785,
          created_at: "2017-07-06T18:28:37Z",
          updated_at: "2017-07-12T18:04:36Z",
          estimate: 0,
          story_type: "feature",
          name: "All offline orders should show up in OM",
          description: "As a ______, I want ______, so that _______.\n\n__Acceptance Criteria__\n* The JCS job should run on a nightly basis and should push all offline orders (for all the stores) to order management\n* While being in offline mode, working tab should display all of the orders that have not been pulled yet\n* While being in offline mode, pickup tab should display all the orders that have been pulled\n* Print Call Sheet should print the call sheet \n* Print Pull sheet should print selected order instructions that needs to be pulled",
          current_state: "delivered",
          requested_by_id: 27166,
          url: "https://www.pivotaltracker.com/story/show/148435785",
          project_id: 1452294,
          owner_ids: [
              27166,
              1877718
          ],
          labels: [
              {
                  id: 18218257,
                  project_id: 1452294,
                  kind: "label",
                  name: "order-management-3.37.0",
                  created_at: "2017-04-17T14:54:38Z",
                  updated_at: "2017-04-17T14:54:38Z",
                  "$$hashKey": "02F"
              },
              {
                  id: 18528833,
                  project_id: 1452294,
                  kind: "label",
                  name: "order-print-service-3.37.0",
                  created_at: "2017-05-29T14:41:43Z",
                  updated_at: "2017-05-29T14:41:43Z",
                  "$$hashKey": "02G"
              },
              {
                  id: 17795189,
                  project_id: 1452294,
                  kind: "label",
                  name: "store-postgres",
                  created_at: "2017-02-27T18:51:47Z",
                  updated_at: "2017-02-27T19:07:37Z",
                  "$$hashKey": "02H"
              }
          ],
          owned_by_id: 27166,
          "$$hashKey": "020"
      },
      {
          owners: [
            {
                memberIndex: 3
            },
            {
                memberIndex: 7
            }
          ],
          requestor: {
              memberIndex: 7
          },
          kind: "story",
          id: 148029439,
          created_at: "2017-06-28T19:25:26Z",
          updated_at: "2017-07-12T16:51:59Z",
          estimate: 0,
          story_type: "bug",
          name: "The processing icon keeps on spinning when a cut sku is consolidated - Stockroom app",
          description: "__What It's Doing__\nThe processing icon keeps on spinning when a cut sku is consolidated in the stockroom app.  \n\n__What It Should Be Doing__\nOnce the license id's are displayed the processing icon should disappear\n\nNote: issue exists in both 9190 and 9290 (Tomcat)\nNo issues when an order without a cut sku is consolidated\n\nNo issue on weblogic with or without cut sku \n\n__How To Reproduce__\nCreate an order in CDC (#35) with a cut sku (10065472) \nLog into Order Management and expedite the order\nLog in to Stockroom app on rf device\nClick on Pick Floor-->Floor\nLicense id will be printed on the printer. Scan it or type the license id\nScan/enter sku and qty\nStage at TS01\nClick on Floor Cut. License id will be printed on the printer. Scan it or type the license id. Scan/enter sku and qty. Stage at CS01\nClick on Back button and then click on Cut\nScan/enter the license id\nCut label will be printed, scan it and stage at TS01\nClick Consolidate\n\nScreenshots attached\n\n\n",
          current_state: "started",
          requested_by_id: 1877718,
          url: "https://www.pivotaltracker.com/story/show/148029439",
          project_id: 1452294,
          owner_ids: [
              372571,
              1877718
          ],
          labels: [
              {
                  id: 15698611,
                  project_id: 1452294,
                  kind: "label",
                  name: "9290",
                  created_at: "2016-07-07T16:14:11Z",
                  updated_at: "2016-07-07T16:14:11Z",
                  "$$hashKey": "01M"
              },
              {
                  id: 18680853,
                  project_id: 1452294,
                  kind: "label",
                  name: "directed-order-pulling-4.2.1",
                  created_at: "2017-06-19T20:12:44Z",
                  updated_at: "2017-06-19T20:12:44Z",
                  "$$hashKey": "01N"
              }
          ],
          owned_by_id: 372571,
          "$$hashKey": "019"
      },
      {
          owners: [
              {
                  memberIndex: 3
              },
              {
                  memberIndex: 7
              }
          ],
          requestor: {
              memberIndex: 3
          },
          kind: "story",
          id: 140442493,
          created_at: "2017-02-22T21:05:08Z",
          updated_at: "2017-07-12T15:41:43Z",
          estimate: 2,
          story_type: "bug",
          name: "Correct Count App store chooser in dev/test mode so that the popup stays visible to allow choice after clicking (9190 & 9290)",
          description: "We're replacing the store-chooser with a text box where a developer or tester can key in a store number that they want to test with.",
          current_state: "finished",
          requested_by_id: 372571,
          url: "https://www.pivotaltracker.com/story/show/140442493",
          project_id: 1452294,
          owner_ids: [
              372571,
              1877718
          ],
          labels: [
              {
                  id: 17778027,
                  project_id: 1452294,
                  kind: "label",
                  name: "count-app-1.0.0",
                  created_at: "2017-02-24T16:59:20Z",
                  updated_at: "2017-02-24T16:59:20Z",
                  "$$hashKey": "01X"
              }
          ],
          owned_by_id: 372571,
          "$$hashKey": "01T"
      },
      {
          owners: [
              {
                  memberIndex: 3
              },
              {
                  memberIndex: 7
              },
              {
                  memberIndex: 24
              }
          ],
          requestor: {
              memberIndex: 5
          },
          kind: "story",
          id: 137976357,
          created_at: "2017-01-19T17:15:10Z",
          updated_at: "2017-07-11T18:22:36Z",
          estimate: 5,
          story_type: "feature",
          name: "Configure a 9290 w/apps and regress ",
          description: "As an order puller, I want to be able to open the order processing application on the new 9290 device, so I can process orders. \n\nSet up a 9290 device similar to the steps we follow to set up a 9190 device.\n\nApply our fix for the apps and deploy them to that 9290.\n\n__Acceptance Criteria__\n* Applications work properly on 9290 device\n* device is configured with the new app center process - that will be done in story https://www.pivotaltracker.com/story/show/139480359\n\nNOTE: comments on #125590021 document what we figured out so far.\n\n",
          current_state: "delivered",
          requested_by_id: 27816,
          url: "https://www.pivotaltracker.com/story/show/137976357",
          project_id: 1452294,
          owner_ids: [
              372571,
              1877718,
              2630677
          ],
          labels: [
              {
                  id: 15698611,
                  project_id: 1452294,
                  kind: "label",
                  name: "9290",
                  created_at: "2016-07-07T16:14:11Z",
                  updated_at: "2016-07-07T16:14:11Z",
                  "$$hashKey": "02O"
              }
          ],
          owned_by_id: 372571,
          "$$hashKey": "021"
      },
      {
          owners: [
              {
                  memberIndex: 3
              },
              {
                  memberIndex: 7
              }
          ],
          requestor: {
              memberIndex: 3
          },
          kind: "story",
          id: 148036991,
          created_at: "2017-06-28T21:10:39Z",
          updated_at: "2017-07-10T18:32:38Z",
          estimate: 0,
          story_type: "bug",
          name: "Count App in prod hangs after keying valid employee number",
          description: "__What It's Doing__\n\nStackOverflowException occurs during Swing/AWT event dispatching after keying a valid employee number. It appears that the service request for the employee's info succeeds, but before asking for store-specific info, the app sits and generates more and more stack frames.\n\nThis occurred while testing at GAL in the actual store (so the store choice was already made for use, by virtue of IP address scraping). We haven't reproduced this in lab (yet).\n\n__What It Should Be Doing__\n\nNot hanging, count app proceeds as normal.\n\n__How To Reproduce__\n\n* In a store (on premises), bring up the Count App against the prod environment\n* When prompted, key in your employee number and click the OK button\n* Observe the app not advancing to the next screen",
          current_state: "delivered",
          requested_by_id: 372571,
          url: "https://www.pivotaltracker.com/story/show/148036991",
          project_id: 1452294,
          owner_ids: [
              372571,
              1877718
          ],
          labels: [
              {
                  id: 15698611,
                  project_id: 1452294,
                  kind: "label",
                  name: "9290",
                  created_at: "2016-07-07T16:14:11Z",
                  updated_at: "2016-07-07T16:14:11Z",
                  "$$hashKey": "02S"
              },
              {
                  id: 17778027,
                  project_id: 1452294,
                  kind: "label",
                  name: "count-app-1.0.0",
                  created_at: "2017-02-24T16:59:20Z",
                  updated_at: "2017-02-24T16:59:20Z",
                  "$$hashKey": "02T"
              }
          ],
          owned_by_id: 372571,
          "$$hashKey": "022"
      },
      {
          owners: [
              {
                  memberIndex: 3
              },
              {
                  memberIndex: 7
              }
          ],
          requestor: {
              memberIndex: 13
          },
          kind: "story",
          id: 143146345,
          created_at: "2017-04-05T14:44:01Z",
          updated_at: "2017-07-10T18:10:57Z",
          accepted_at: "2017-07-10T18:10:57Z",
          estimate: 3,
          story_type: "feature",
          name: "Modify the volume settings on the 9190/9290 - both system level and app level",
          description: "As a user of the RF device, I would like the volume to be adjusted so that it is reasonable based on what action I am performing. \n\n__Acceptance Criteria__\n* System level volume setting\n* Volume setting  by application (count app, order processing, directed order processing, stock room)\n* Volume setting should be applied to training environment as well.\n\n\n\n",
          current_state: "accepted",
          requested_by_id: 666695,
          url: "https://www.pivotaltracker.com/story/show/143146345",
          project_id: 1452294,
          owner_ids: [
              372571,
              1877718
          ],
          labels: [
              {
                  id: 15698611,
                  project_id: 1452294,
                  kind: "label",
                  name: "9290",
                  created_at: "2016-07-07T16:14:11Z",
                  updated_at: "2016-07-07T16:14:11Z",
                  "$$hashKey": "03E"
              },
              {
                  id: 17778027,
                  project_id: 1452294,
                  kind: "label",
                  name: "count-app-1.0.0",
                  created_at: "2017-02-24T16:59:20Z",
                  updated_at: "2017-02-24T16:59:20Z",
                  "$$hashKey": "03F"
              },
              {
                  id: 18680853,
                  project_id: 1452294,
                  kind: "label",
                  name: "directed-order-pulling-4.2.1",
                  created_at: "2017-06-19T20:12:44Z",
                  updated_at: "2017-06-19T20:12:44Z",
                  "$$hashKey": "03G"
              },
              {
                  id: 18218499,
                  project_id: 1452294,
                  kind: "label",
                  name: "order-pulling-putaway-4.2.1",
                  created_at: "2017-04-17T15:21:57Z",
                  updated_at: "2017-04-17T15:21:57Z",
                  "$$hashKey": "03H"
              }
          ],
          owned_by_id: 372571,
          "$$hashKey": "02X"
      },
      {
          owners: [
              {
                  memberIndex: 8
              },
              {
                  memberIndex: 7
              }
          ],
          requestor: {
              memberIndex: 8
          },
          kind: "story",
          id: 140699595,
          created_at: "2017-02-27T18:59:28Z",
          updated_at: "2017-07-10T18:10:56Z",
          accepted_at: "2017-07-10T18:10:56Z",
          estimate: 0,
          story_type: "feature",
          name: "Modify Order management to use postgres",
          description: "As XXX I want Order management to be migrated to use a postgress DB so that we can reduce the costs of oracle licenses.\n\n__Acceptance Criteria__\n",
          current_state: "accepted",
          requested_by_id: 27166,
          url: "https://www.pivotaltracker.com/story/show/140699595",
          project_id: 1452294,
          owner_ids: [
              27166,
              1877718
          ],
          labels: [
              {
                  id: 18094405,
                  project_id: 1452294,
                  kind: "label",
                  name: "order-management-3.36.6",
                  created_at: "2017-03-30T17:01:51Z",
                  updated_at: "2017-03-30T17:01:51Z",
                  "$$hashKey": "03O"
              },
              {
                  id: 18218257,
                  project_id: 1452294,
                  kind: "label",
                  name: "order-management-3.37.0",
                  created_at: "2017-04-17T14:54:38Z",
                  updated_at: "2017-04-17T14:54:38Z",
                  "$$hashKey": "03P"
              },
              {
                  id: 18528833,
                  project_id: 1452294,
                  kind: "label",
                  name: "order-print-service-3.37.0",
                  created_at: "2017-05-29T14:41:43Z",
                  updated_at: "2017-05-29T14:41:43Z",
                  "$$hashKey": "03Q"
              },
              {
                  id: 17795189,
                  project_id: 1452294,
                  kind: "label",
                  name: "store-postgres",
                  created_at: "2017-02-27T18:51:47Z",
                  updated_at: "2017-02-27T19:07:37Z",
                  "$$hashKey": "03R"
              }
          ],
          owned_by_id: 27166,
          "$$hashKey": "02Y"
      },
      {
          owners: [
              {
                  memberIndex: 1
              }
          ],
          requestor: {
              memberIndex: 1
          },
          kind: "story",
          id: 144617913,
          created_at: "2017-05-01T16:01:02Z",
          updated_at: "2017-05-01T19:13:50Z",
          estimate: 0,
          story_type: "chore",
          name: "After hours testing at Fairview",
          current_state: "started",
          requested_by_id: 1778434,
          url: "https://www.pivotaltracker.com/story/show/144617913",
          project_id: 1452294,
          owner_ids: [
              1778434
          ],
          labels: [
              {
                  id: 17795189,
                  project_id: 1452294,
                  kind: "label",
                  name: "store-postgres",
                  created_at: "2017-02-27T18:51:47Z",
                  updated_at: "2017-02-27T19:07:37Z",
                  "$$hashKey": "01R"
              }
          ],
          owned_by_id: 1778434,
          "$$hashKey": "01A"
      }
    ],
    members:[
      {
            ind: 0,
            kind: "person",
            id: 18455,
            name: "David Ayers",
            email: "davida@containerstore.com",
            initials: "DA",
            username: "davidayers",
        },
        {
            ind: 1,
            kind: "person",
            id: 1778434,
            name: "Matt Smith",
            email: "mpsmith@containerstore.com",
            initials: "MS",
            username: "mattsmith43",
        },
        {
            ind: 2,
            kind: "person",
            id: 1738640,
            name: "Susan Hamilton",
            email: "sjhamilton@containerstore.com",
            initials: "SH",
            username: "susanhamilton",
        },
        {
            ind: 3,
            kind: "person",
            id: 372571,
            name: "Paul Holser",
            email: "prholser@containerstore.com",
            initials: "PHOLSER",
            username: "pholser",
        },
        {
            ind: 4,
            kind: "person",
            id: 138572,
            name: "Ravi Varanasi",
            email: "r_varanasi@containerstore.com",
            initials: "RV",
            username: "raviv",
        },
        {
            ind: 5,
            kind: "person",
            id: 27816,
            name: "Lori Laznovsky",
            email: "loril@containerstore.com",
            initials: "ll",
            username: "loril",
        },
        {
            ind: 6,
            kind: "person",
            id: 588023,
            name: "Emily Graham",
            email: "etgraham@containerstore.com",
            initials: "EG",
            username: "etgraham",
        },
        {
            ind: 7,
            kind: "person",
            id: 1877718,
            name: "Vishal Mongia",
            email: "VMongia@containerstore.com",
            initials: "VM",
            username: "vmongia",
        },
        {
            ind: 8,
            kind: "person",
            id: 27166,
            name: "Ryan Breidenbach",
            email: "rsbreidenbach@containerstore.com",
            initials: "RSB",
            username: "twoqubed",
        },
        {
            ind: 9,
            kind: "person",
            id: 1450274,
            name: "Pivotal Integration",
            email: "pivotal.integration.tcs@gmail.com",
            initials: "PI",
            username: "pivotalintegration",
        },
        {
            ind: 10,
            kind: "person",
            id: 19571,
            name: "Chris Perry",
            email: "chrisp@containerstore.com",
            initials: "CP",
            username: "cwperry",
        },
        {
            ind: 11,
            kind: "person",
            id: 637579,
            name: "Omar Uribe",
            email: "omaru@containerstore.com",
            initials: "ou",
            username: "omaru",
        },
        {
            ind: 12,
            kind: "person",
            id: 38297,
            name: "David Micek",
            email: "davidm@containerstore.com",
            initials: "DM",
            username: "davidmicek",
        },
        {
            ind: 13,
            kind: "person",
            id: 666695,
            name: "April Nemley",
            email: "annemley@containerstore.com",
            initials: "AN",
            username: "aprilnemley",
        },
        {
            ind: 14,
            kind: "person",
            id: 1001147,
            name: "Lisa Wynne",
            email: "ldwynne@containerstore.com",
            initials: "lw",
            username: "lisawynne",
        },
        {
            ind: 15,
            kind: "person",
            id: 395861,
            name: "Jason Daniels",
            email: "jrdaniels@containerstore.com",
            initials: "JD",
            username: "jasondaniels1",
        },
        {
            ind: 16,
            kind: "person",
            id: 45684,
            name: "Ed Wagner",
            email: "ewwagner@containerstore.com",
            initials: "EW",
            username: "edwagner",
        },
        {
            ind: 17,
            kind: "person",
            id: 1844680,
            name: "Rick Mitterer",
            email: "RDMitterer@containerstore.com",
            initials: "RM",
            username: "rickmitterer",
        },
        {
            ind: 18,
            kind: "person",
            id: 603227,
            name: "John Dalton",
            email: "jldalton@containerstore.com",
            initials: "JLD",
            username: "jldalton",
        },
        {
            ind: 19,
            kind: "person",
            id: 582915,
            name: "Dilip Krishnan",
            email: "d_krishnan@containerstore.com",
            initials: "DK",
            username: "dilipkrish",
        },
        {
            ind: 20,
            kind: "person",
            id: 577303,
            name: "Tcs Itsm Pivotal Integration",
            email: "tcsitsmpivotal@gmail.com",
            initials: "itsm",
            username: "tcsi",
        },
        {
            ind: 21,
            kind: "person",
            id: 635535,
            name: "Todd Stout",
            email: "btstout@containerstore.com",
            initials: "TS",
            username: "tstout",
        },
        {
            ind: 22,
            kind: "person",
            id: 2209585,
            name: "Sami Kaied",
            email: "sykaied@containerstore.com",
            initials: "SK",
            username: "sykaied",
        },
        {
            ind: 23,
            kind: "person",
            id: 2236623,
            name: "Viji Rajagopal",
            email: "v_Rajagopal@containerstore.com",
            initials: "VR",
            username: "vrajagopal1",
        },
        {
            ind: 24,
            kind: "person",
            id: 2630677,
            name: "Jennifer Appell",
            email: "jmappell@containerstore.com",
            initials: "JA",
            username: "jenniferappell",
        },
        {
            ind: 25,
            kind: "person",
            id: 174155,
            name: "Test Integration User",
            email: "tcs.pivotal.integration@gmail.com",
            initials: "tiu",
            username: "testintegration",
        },
        {
            ind: 26,
            kind: "person",
            id: 2237937,
            name: "Richard Worth",
            email: "Rdworth@containerstore.com",
            initials: "RW",
            username: "richardworth2",
        },
        {
            ind: 27,
            kind: "person",
            id: 143171,
            name: "Jeff Harvey",
            email: "jeffh@containerstore.com",
            initials: "RJH",
            username: "jeffharvey",
        },
        {
            ind: 28,
            kind: "person",
            id: 1407298,
            name: "Bobby Holmes",
            email: "rjholmes@containerstore.com",
            initials: "BH",
            username: "rjholmes",
        },
        {
            ind: 29,
            kind: "person",
            id: 2899373,
            name: "Danna Stull",
            email: "DMStull@containerstore.com",
            initials: "DS",
            username: "dannas",
        },
        {
            ind: 30,
            kind: "person",
            id: 34578,
            name: "Jonathan Ball",
            email: "jball@credera.com",
            initials: "JB",
            username: "jonathanball",
        },
        {
            ind: 31,
            kind: "person",
            id: 1230946,
            name: "Richard Kiel",
            email: "rwkiel@containerstore.com",
            initials: "RWK",
            username: "richardkiel",
        },
        {
            ind: 32,
            kind: "",
            id: -1,
            name: "Unassigned",
            email: "",
            initials: "",
            username: "",
        },
    ]
}

const membersTemp = [];

const stories = project.stories.map((story) =>{
  story.owners = story.owners.map( o => project.members[o.memberIndex]);
  story.requestor = project.members[story.requestor];
  story.owners.map(o => {membersTemp.push(o)})
  return story;
});

const team = [...new Set(membersTemp)];

const DataProvider = { stories, team, project };
export default DataProvider;
