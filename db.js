const products = [
    {
        name: "Camiseta Outcast",
        description:
            "Perferendis est eius sapiente voluptatibus sequi beatae quo vero ullam. Repellendus ullam est harum harum doloremque velit incidunt. Ipsam dignissimos odit odio natus quia quos saepe nulla.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
        category: "t-shirts",
        id: "63fe838f-9589-433f-bbdb-abeeace3a38d",
        price_in_cents: 7850,
        sales: 16,
        created_at: "2023-02-07T12:46:21.585Z",
    },
    {
        name: "Caneca preto fosco",
        description:
            "Consequatur ut sit. Qui qui vero dolor odio quis dolorum. Temporibus quia odio facere id assumenda. Quia voluptatem earum assumenda quibusdam voluptatem corporis iusto cum. Sapiente numquam necessitatibus repudiandae nam reprehenderit qui beatae unde.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg",
        category: "mugs",
        id: "b16899bf-3966-4281-87a7-d6d911ceb982",
        price_in_cents: 2754,
        sales: 1,
        created_at: "2022-10-09T22:36:01.922Z",
    },
    {
        name: "Camiseta not today.",
        description:
            "Deserunt accusamus ut error. Molestiae omnis inventore quia id eum et ratione. Qui ipsum sint consectetur eligendi voluptas velit asperiores. Quaerat impedit explicabo recusandae aliquam pariatur. Quis aut molestias inventore molestiae quod.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        category: "t-shirts",
        id: "4b12f374-5a35-4620-881b-43032b4b0ceb",
        price_in_cents: 6623,
        sales: 1,
        created_at: "2023-05-08T22:57:42.508Z",
    },
    {
        name: "Caneca de cerâmica rústica",
        description:
            "Provident omnis totam. Ipsam repellendus fugit eveniet accusamus delectus praesentium. Laudantium nostrum illum deleniti consectetur ad veniam autem aperiam. Aut id neque velit autem. Modi modi et.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        category: "mugs",
        id: "933c0727-ec95-4059-bfec-f853b7726ab7",
        price_in_cents: 6235,
        sales: 4,
        created_at: "2023-08-02T01:20:36.788Z",
    },
    {
        name: "Caneca Black Ring",
        description:
            "Quis tempore labore molestiae minus incidunt ut officia facere. Est exercitationem non cupiditate dolorum doloribus. Rerum excepturi rerum ex harum ut placeat quasi. Magni tempora illo.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        category: "mugs",
        id: "001e8c3f-954c-4474-86f5-fb16912ca055",
        price_in_cents: 7223,
        sales: 36,
        created_at: "2022-09-21T07:50:01.780Z",
    },
    {
        name: "Caneca Decaf! P&Co",
        description:
            "Beatae accusantium nihil eius consequatur quis. Repudiandae dolore aspernatur autem inventore ea exercitationem aut. Ab velit ab est. Porro aliquam quas nemo ipsum rerum veritatis est. Qui tempora debitis et molestiae incidunt.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        category: "mugs",
        id: "50f47563-4500-47f3-bb28-73aeb648ae3f",
        price_in_cents: 9517,
        sales: 29,
        created_at: "2022-12-14T22:45:41.331Z",
    },
    {
        name: "Camiseta Ramones",
        description:
            "Voluptate non quae. Tenetur suscipit magni sit maxime recusandae sit maxime. Tempore voluptatum repellendus et libero. Dolorem consectetur sed adipisci nostrum dolores in.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        category: "t-shirts",
        id: "c634e7a7-4fd8-4bd8-96cf-f2ad5f8f283d",
        price_in_cents: 2321,
        sales: 9,
        created_at: "2023-02-14T12:07:59.856Z",
    },
    {
        name: "Camiseta DREAMER",
        description:
            "Tenetur autem unde ex saepe minus qui est ut. Iusto adipisci quos omnis enim quisquam. Amet in vero nobis magnam pariatur.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg",
        category: "t-shirts",
        id: "fe605630-ac24-4325-a7e2-8141bbce0169",
        price_in_cents: 7480,
        sales: 8,
        created_at: "2023-02-05T01:27:05.870Z",
    },
    {
        name: "Caneca The Grounds",
        description:
            "Molestiae quam sunt adipisci omnis non laudantium sit. Quia reprehenderit quasi consequuntur illum provident labore. Sit incidunt voluptatem voluptatem eveniet reiciendis. Tempora quia eaque et aperiam fugiat modi. Alias impedit unde beatae. Quo architecto qui non iste perspiciatis officiis ea.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg",
        category: "mugs",
        id: "c2e92fc1-8ec5-4972-b1dc-af9ea300d25b",
        price_in_cents: 7941,
        sales: 33,
        created_at: "2023-06-21T14:57:36.275Z",
    },
    {
        name: "Camiseta Broken Saints",
        description:
            "Consequuntur dolorum et molestias perspiciatis a accusamus sapiente. Ut mollitia sequi ut est iusto. Eius corporis natus eaque provident quia quo ut.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
        category: "t-shirts",
        id: "1317e10b-462d-4e73-93a2-e73b3b267759",
        price_in_cents: 8817,
        sales: 36,
        created_at: "2022-10-08T09:34:52.176Z",
    },
    {
        name: "Camiseta evening",
        description:
            "Dolorum sit rerum perferendis saepe inventore rerum quo amet. Dolor et illo quod provident dignissimos est voluptatem et. Eos veniam alias neque ad asperiores. Quia perferendis optio non soluta iure ipsa qui. Rerum dolores et ut sed excepturi omnis. Autem aut ut consequuntur quos cumque tenetur quia.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg",
        category: "t-shirts",
        id: "04320e93-013f-420d-9034-f81ed946b9b5",
        price_in_cents: 7202,
        sales: 13,
        created_at: "2023-09-03T13:37:42.271Z",
    },
    {
        name: "Caneca Never settle",
        description:
            "Voluptatum mollitia sit sit eum molestiae assumenda sit. Voluptatem nihil reprehenderit minus vero alias sed vel suscipit. Non asperiores ut rem et aut saepe omnis suscipit. Laudantium aliquam consequatur commodi qui distinctio. Asperiores aut omnis. Quas et vero fugit assumenda odio assumenda officia modi.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        category: "mugs",
        id: "2d4d65a9-86c6-4d02-9af2-daa19c789efe",
        price_in_cents: 9097,
        sales: 8,
        created_at: "2023-02-20T12:59:22.607Z",
    },
    {
        name: "Caneca de cerâmica rústica",
        description:
            "Provident omnis totam. Ipsam repellendus fugit eveniet accusamus delectus praesentium. Laudantium nostrum illum deleniti consectetur ad veniam autem aperiam. Aut id neque velit autem. Modi modi et.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        category: "mugs",
        id: "363a2fd8-5880-427f-86f9-8379b6d237c5",
        price_in_cents: 2115,
        sales: 32,
        created_at: "2023-02-20T16:10:13.779Z",
    },
    {
        name: "Camiseta Broken Saints",
        description:
            "Consequuntur dolorum et molestias perspiciatis a accusamus sapiente. Ut mollitia sequi ut est iusto. Eius corporis natus eaque provident quia quo ut.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
        category: "t-shirts",
        id: "f929ece9-ca21-450d-b793-5d9e4afb63cb",
        price_in_cents: 9623,
        sales: 33,
        created_at: "2023-07-19T20:54:59.806Z",
    },
    {
        name: "Camiseta evening",
        description:
            "Dolorum sit rerum perferendis saepe inventore rerum quo amet. Dolor et illo quod provident dignissimos est voluptatem et. Eos veniam alias neque ad asperiores. Quia perferendis optio non soluta iure ipsa qui. Rerum dolores et ut sed excepturi omnis. Autem aut ut consequuntur quos cumque tenetur quia.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg",
        category: "t-shirts",
        id: "8835791c-8b10-44fb-9303-37095f41c657",
        price_in_cents: 4762,
        sales: 0,
        created_at: "2022-10-13T06:49:11.293Z",
    },
    {
        name: "Camiseta not today.",
        description:
            "Deserunt accusamus ut error. Molestiae omnis inventore quia id eum et ratione. Qui ipsum sint consectetur eligendi voluptas velit asperiores. Quaerat impedit explicabo recusandae aliquam pariatur. Quis aut molestias inventore molestiae quod.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        category: "t-shirts",
        id: "d362104e-3a44-4d33-975c-c1a802030dbb",
        price_in_cents: 9110,
        sales: 30,
        created_at: "2022-11-05T01:47:29.686Z",
    },
    {
        name: "Caneca preto fosco",
        description:
            "Consequatur ut sit. Qui qui vero dolor odio quis dolorum. Temporibus quia odio facere id assumenda. Quia voluptatem earum assumenda quibusdam voluptatem corporis iusto cum. Sapiente numquam necessitatibus repudiandae nam reprehenderit qui beatae unde.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg",
        category: "mugs",
        id: "21d8a993-d1bd-416b-ba1c-1eca99f14436",
        price_in_cents: 9894,
        sales: 12,
        created_at: "2022-11-15T11:24:25.503Z",
    },
    {
        name: "Camiseta Ramones",
        description:
            "Voluptate non quae. Tenetur suscipit magni sit maxime recusandae sit maxime. Tempore voluptatum repellendus et libero. Dolorem consectetur sed adipisci nostrum dolores in.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        category: "t-shirts",
        id: "e056a0ce-5d3f-480c-bf4e-da23fb7aa9bb",
        price_in_cents: 6200,
        sales: 24,
        created_at: "2022-12-13T04:06:55.681Z",
    },
    {
        name: "Caneca Never settle",
        description:
            "Voluptatum mollitia sit sit eum molestiae assumenda sit. Voluptatem nihil reprehenderit minus vero alias sed vel suscipit. Non asperiores ut rem et aut saepe omnis suscipit. Laudantium aliquam consequatur commodi qui distinctio. Asperiores aut omnis. Quas et vero fugit assumenda odio assumenda officia modi.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        category: "mugs",
        id: "2aea6b9a-ecc8-46d4-ae3e-3b1b131740f8",
        price_in_cents: 4336,
        sales: 19,
        created_at: "2023-07-25T15:51:59.687Z",
    },
    {
        name: "Caneca Black Ring",
        description:
            "Quis tempore labore molestiae minus incidunt ut officia facere. Est exercitationem non cupiditate dolorum doloribus. Rerum excepturi rerum ex harum ut placeat quasi. Magni tempora illo.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        category: "mugs",
        id: "42823570-536a-41c2-8f8f-1de62f0e8b93",
        price_in_cents: 7013,
        sales: 11,
        created_at: "2022-12-14T22:41:13.828Z",
    },
    {
        name: "Camiseta DREAMER",
        description:
            "Tenetur autem unde ex saepe minus qui est ut. Iusto adipisci quos omnis enim quisquam. Amet in vero nobis magnam pariatur.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg",
        category: "t-shirts",
        id: "02750e8d-6e75-4130-8467-f5da09607102",
        price_in_cents: 7480,
        sales: 21,
        created_at: "2023-08-25T01:19:33.018Z",
    },
    {
        name: "Caneca The Grounds",
        description:
            "Molestiae quam sunt adipisci omnis non laudantium sit. Quia reprehenderit quasi consequuntur illum provident labore. Sit incidunt voluptatem voluptatem eveniet reiciendis. Tempora quia eaque et aperiam fugiat modi. Alias impedit unde beatae. Quo architecto qui non iste perspiciatis officiis ea.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg",
        category: "mugs",
        id: "1b7907ab-b46f-47a7-95e9-bce73d387a26",
        price_in_cents: 8814,
        sales: 24,
        created_at: "2022-10-30T11:10:35.714Z",
    },
    {
        name: "Caneca Decaf! P&Co",
        description:
            "Beatae accusantium nihil eius consequatur quis. Repudiandae dolore aspernatur autem inventore ea exercitationem aut. Ab velit ab est. Porro aliquam quas nemo ipsum rerum veritatis est. Qui tempora debitis et molestiae incidunt.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        category: "mugs",
        id: "440838e9-2e7a-4bf3-aa91-29a9c469ebd2",
        price_in_cents: 8172,
        sales: 20,
        created_at: "2023-03-22T03:49:43.905Z",
    },
    {
        name: "Camiseta Outcast",
        description:
            "Perferendis est eius sapiente voluptatibus sequi beatae quo vero ullam. Repellendus ullam est harum harum doloremque velit incidunt. Ipsam dignissimos odit odio natus quia quos saepe nulla.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
        category: "t-shirts",
        id: "aaef12c6-373a-4c3c-88bf-94148e016dd4",
        price_in_cents: 4768,
        sales: 1,
        created_at: "2022-09-19T17:01:21.036Z",
    },
    {
        name: "Caneca de cerâmica rústica",
        description:
            "Provident omnis totam. Ipsam repellendus fugit eveniet accusamus delectus praesentium. Laudantium nostrum illum deleniti consectetur ad veniam autem aperiam. Aut id neque velit autem. Modi modi et.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        category: "mugs",
        id: "faacac52-7900-41dd-8004-625d2154a8ae",
        price_in_cents: 6850,
        sales: 16,
        created_at: "2022-09-24T08:09:47.559Z",
    },
    {
        name: "Caneca Never settle",
        description:
            "Voluptatum mollitia sit sit eum molestiae assumenda sit. Voluptatem nihil reprehenderit minus vero alias sed vel suscipit. Non asperiores ut rem et aut saepe omnis suscipit. Laudantium aliquam consequatur commodi qui distinctio. Asperiores aut omnis. Quas et vero fugit assumenda odio assumenda officia modi.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        category: "mugs",
        id: "5887096e-3109-4d0a-82d9-981ec3fd15a9",
        price_in_cents: 4793,
        sales: 10,
        created_at: "2023-09-18T08:51:39.234Z",
    },
    {
        name: "Camiseta not today.",
        description:
            "Deserunt accusamus ut error. Molestiae omnis inventore quia id eum et ratione. Qui ipsum sint consectetur eligendi voluptas velit asperiores. Quaerat impedit explicabo recusandae aliquam pariatur. Quis aut molestias inventore molestiae quod.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        category: "t-shirts",
        id: "d48ddde8-83ba-40d2-b8a0-b0ef5a21c2b5",
        price_in_cents: 5336,
        sales: 30,
        created_at: "2023-06-21T21:42:47.774Z",
    },
    {
        name: "Caneca The Grounds",
        description:
            "Molestiae quam sunt adipisci omnis non laudantium sit. Quia reprehenderit quasi consequuntur illum provident labore. Sit incidunt voluptatem voluptatem eveniet reiciendis. Tempora quia eaque et aperiam fugiat modi. Alias impedit unde beatae. Quo architecto qui non iste perspiciatis officiis ea.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg",
        category: "mugs",
        id: "85894f02-b2c0-47a0-a0fa-c2bd9dc008ac",
        price_in_cents: 5334,
        sales: 7,
        created_at: "2023-08-01T14:38:27.079Z",
    },
    {
        name: "Camiseta Broken Saints",
        description:
            "Consequuntur dolorum et molestias perspiciatis a accusamus sapiente. Ut mollitia sequi ut est iusto. Eius corporis natus eaque provident quia quo ut.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
        category: "t-shirts",
        id: "99892159-dbba-4940-89c5-7f9cd71328ae",
        price_in_cents: 6847,
        sales: 27,
        created_at: "2022-10-27T16:35:45.753Z",
    },
    {
        name: "Camiseta Ramones",
        description:
            "Voluptate non quae. Tenetur suscipit magni sit maxime recusandae sit maxime. Tempore voluptatum repellendus et libero. Dolorem consectetur sed adipisci nostrum dolores in.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        category: "t-shirts",
        id: "4c4b9c77-702b-4035-af93-9cead7c27ac5",
        price_in_cents: 3678,
        sales: 32,
        created_at: "2022-11-14T03:39:15.693Z",
    },
    {
        name: "Caneca Black Ring",
        description:
            "Quis tempore labore molestiae minus incidunt ut officia facere. Est exercitationem non cupiditate dolorum doloribus. Rerum excepturi rerum ex harum ut placeat quasi. Magni tempora illo.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        category: "mugs",
        id: "9f2be6c1-d9a2-46b5-b539-e37e00d4e3b4",
        price_in_cents: 3951,
        sales: 19,
        created_at: "2022-12-11T03:54:35.450Z",
    },
    {
        name: "Camiseta Outcast",
        description:
            "Perferendis est eius sapiente voluptatibus sequi beatae quo vero ullam. Repellendus ullam est harum harum doloremque velit incidunt. Ipsam dignissimos odit odio natus quia quos saepe nulla.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
        category: "t-shirts",
        id: "2d6cf3c9-ff4d-44a7-ba6c-ad07e91d8dbf",
        price_in_cents: 9946,
        sales: 30,
        created_at: "2022-12-06T22:57:24.011Z",
    },
    {
        name: "Camiseta DREAMER",
        description:
            "Tenetur autem unde ex saepe minus qui est ut. Iusto adipisci quos omnis enim quisquam. Amet in vero nobis magnam pariatur.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg",
        category: "t-shirts",
        id: "acb379f0-9fdd-4d93-a186-f921a2b3aad3",
        price_in_cents: 2184,
        sales: 37,
        created_at: "2023-01-02T12:13:49.105Z",
    },
    {
        name: "Caneca Decaf! P&Co",
        description:
            "Beatae accusantium nihil eius consequatur quis. Repudiandae dolore aspernatur autem inventore ea exercitationem aut. Ab velit ab est. Porro aliquam quas nemo ipsum rerum veritatis est. Qui tempora debitis et molestiae incidunt.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        category: "mugs",
        id: "e51bd595-a86e-4380-88f5-a54cbfb63441",
        price_in_cents: 6141,
        sales: 9,
        created_at: "2023-07-05T06:12:33.141Z",
    },
    {
        name: "Camiseta evening",
        description:
            "Dolorum sit rerum perferendis saepe inventore rerum quo amet. Dolor et illo quod provident dignissimos est voluptatem et. Eos veniam alias neque ad asperiores. Quia perferendis optio non soluta iure ipsa qui. Rerum dolores et ut sed excepturi omnis. Autem aut ut consequuntur quos cumque tenetur quia.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg",
        category: "t-shirts",
        id: "702c634e-8f12-49af-8c3b-cc7e56881750",
        price_in_cents: 9443,
        sales: 13,
        created_at: "2023-08-25T16:13:33.916Z",
    },
    {
        name: "Caneca preto fosco",
        description:
            "Consequatur ut sit. Qui qui vero dolor odio quis dolorum. Temporibus quia odio facere id assumenda. Quia voluptatem earum assumenda quibusdam voluptatem corporis iusto cum. Sapiente numquam necessitatibus repudiandae nam reprehenderit qui beatae unde.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg",
        category: "mugs",
        id: "c87d8e74-ad12-43bd-9eef-4b2c18fc2f68",
        price_in_cents: 7896,
        sales: 13,
        created_at: "2023-04-10T23:00:40.692Z",
    },
    {
        name: "Camiseta DREAMER",
        description:
            "Tenetur autem unde ex saepe minus qui est ut. Iusto adipisci quos omnis enim quisquam. Amet in vero nobis magnam pariatur.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg",
        category: "t-shirts",
        id: "5b6b3276-f9da-4c25-ba2e-d830c71a0de8",
        price_in_cents: 6034,
        sales: 31,
        created_at: "2023-09-17T00:39:32.058Z",
    },
    {
        name: "Caneca Decaf! P&Co",
        description:
            "Beatae accusantium nihil eius consequatur quis. Repudiandae dolore aspernatur autem inventore ea exercitationem aut. Ab velit ab est. Porro aliquam quas nemo ipsum rerum veritatis est. Qui tempora debitis et molestiae incidunt.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        category: "mugs",
        id: "d98e28e3-43de-4393-8bf7-8dc33b049bab",
        price_in_cents: 6495,
        sales: 36,
        created_at: "2023-02-05T23:44:59.356Z",
    },
    {
        name: "Camiseta Broken Saints",
        description:
            "Consequuntur dolorum et molestias perspiciatis a accusamus sapiente. Ut mollitia sequi ut est iusto. Eius corporis natus eaque provident quia quo ut.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
        category: "t-shirts",
        id: "260095fe-cfb6-447d-bbeb-89ab962fb00c",
        price_in_cents: 4998,
        sales: 34,
        created_at: "2022-12-15T01:29:08.297Z",
    },
    {
        name: "Caneca Black Ring",
        description:
            "Quis tempore labore molestiae minus incidunt ut officia facere. Est exercitationem non cupiditate dolorum doloribus. Rerum excepturi rerum ex harum ut placeat quasi. Magni tempora illo.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        category: "mugs",
        id: "c83cfe06-de5a-49f6-bfbc-50d8398f9f29",
        price_in_cents: 7190,
        sales: 14,
        created_at: "2023-03-31T11:19:39.681Z",
    },
    {
        name: "Camiseta Outcast",
        description:
            "Perferendis est eius sapiente voluptatibus sequi beatae quo vero ullam. Repellendus ullam est harum harum doloremque velit incidunt. Ipsam dignissimos odit odio natus quia quos saepe nulla.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
        category: "t-shirts",
        id: "98dc639d-784f-4ccd-ac2a-7d2a00769ade",
        price_in_cents: 9659,
        sales: 18,
        created_at: "2022-12-05T11:09:51.580Z",
    },
    {
        name: "Caneca The Grounds",
        description:
            "Molestiae quam sunt adipisci omnis non laudantium sit. Quia reprehenderit quasi consequuntur illum provident labore. Sit incidunt voluptatem voluptatem eveniet reiciendis. Tempora quia eaque et aperiam fugiat modi. Alias impedit unde beatae. Quo architecto qui non iste perspiciatis officiis ea.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg",
        category: "mugs",
        id: "39eb2f45-b78f-4927-9c22-999604148c2e",
        price_in_cents: 3777,
        sales: 12,
        created_at: "2023-08-09T16:42:34.181Z",
    },
    {
        name: "Caneca preto fosco",
        description:
            "Consequatur ut sit. Qui qui vero dolor odio quis dolorum. Temporibus quia odio facere id assumenda. Quia voluptatem earum assumenda quibusdam voluptatem corporis iusto cum. Sapiente numquam necessitatibus repudiandae nam reprehenderit qui beatae unde.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg",
        category: "mugs",
        id: "176c5d41-9442-4605-8b96-402f76198630",
        price_in_cents: 5076,
        sales: 28,
        created_at: "2023-08-22T13:13:58.042Z",
    },
    {
        name: "Camiseta not today.",
        description:
            "Deserunt accusamus ut error. Molestiae omnis inventore quia id eum et ratione. Qui ipsum sint consectetur eligendi voluptas velit asperiores. Quaerat impedit explicabo recusandae aliquam pariatur. Quis aut molestias inventore molestiae quod.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        category: "t-shirts",
        id: "b1a2663a-2cc9-47c3-8ecf-967a1fc71c30",
        price_in_cents: 2231,
        sales: 3,
        created_at: "2022-12-25T20:03:41.809Z",
    },
    {
        name: "Caneca Never settle",
        description:
            "Voluptatum mollitia sit sit eum molestiae assumenda sit. Voluptatem nihil reprehenderit minus vero alias sed vel suscipit. Non asperiores ut rem et aut saepe omnis suscipit. Laudantium aliquam consequatur commodi qui distinctio. Asperiores aut omnis. Quas et vero fugit assumenda odio assumenda officia modi.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        category: "mugs",
        id: "daec7829-9d7e-4bcf-b6f4-31e3f67d0f0b",
        price_in_cents: 2810,
        sales: 25,
        created_at: "2023-02-21T21:46:44.789Z",
    },
    {
        name: "Caneca de cerâmica rústica",
        description:
            "Provident omnis totam. Ipsam repellendus fugit eveniet accusamus delectus praesentium. Laudantium nostrum illum deleniti consectetur ad veniam autem aperiam. Aut id neque velit autem. Modi modi et.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        category: "mugs",
        id: "dbce8113-00b7-4676-a3f6-e8c2eeb0c122",
        price_in_cents: 3805,
        sales: 0,
        created_at: "2023-06-05T21:20:31.631Z",
    },
    {
        name: "Camiseta evening",
        description:
            "Dolorum sit rerum perferendis saepe inventore rerum quo amet. Dolor et illo quod provident dignissimos est voluptatem et. Eos veniam alias neque ad asperiores. Quia perferendis optio non soluta iure ipsa qui. Rerum dolores et ut sed excepturi omnis. Autem aut ut consequuntur quos cumque tenetur quia.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg",
        category: "t-shirts",
        id: "9a134965-d91e-4b93-a053-c8d4d07e86fc",
        price_in_cents: 8649,
        sales: 29,
        created_at: "2022-12-20T07:51:24.063Z",
    },
    {
        name: "Camiseta Ramones",
        description:
            "Voluptate non quae. Tenetur suscipit magni sit maxime recusandae sit maxime. Tempore voluptatum repellendus et libero. Dolorem consectetur sed adipisci nostrum dolores in.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        category: "t-shirts",
        id: "b8b39dee-0f80-4191-8d20-dd315a70fba8",
        price_in_cents: 8241,
        sales: 26,
        created_at: "2023-04-25T05:05:48.308Z",
    },
    {
        name: "Camiseta DREAMER",
        description:
            "Tenetur autem unde ex saepe minus qui est ut. Iusto adipisci quos omnis enim quisquam. Amet in vero nobis magnam pariatur.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg",
        category: "t-shirts",
        id: "25196d4a-8b1d-4afd-a57d-b78863dacfed",
        price_in_cents: 5569,
        sales: 12,
        created_at: "2023-08-03T22:58:50.403Z",
    },
    {
        name: "Caneca de cerâmica rústica",
        description:
            "Provident omnis totam. Ipsam repellendus fugit eveniet accusamus delectus praesentium. Laudantium nostrum illum deleniti consectetur ad veniam autem aperiam. Aut id neque velit autem. Modi modi et.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        category: "mugs",
        id: "295e24c7-0724-442c-b6dd-012852dd372f",
        price_in_cents: 4886,
        sales: 27,
        created_at: "2023-02-02T22:30:55.927Z",
    },
    {
        name: "Caneca The Grounds",
        description:
            "Molestiae quam sunt adipisci omnis non laudantium sit. Quia reprehenderit quasi consequuntur illum provident labore. Sit incidunt voluptatem voluptatem eveniet reiciendis. Tempora quia eaque et aperiam fugiat modi. Alias impedit unde beatae. Quo architecto qui non iste perspiciatis officiis ea.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg",
        category: "mugs",
        id: "5e9c3fad-bf43-472f-9dce-e085a9a75a43",
        price_in_cents: 8191,
        sales: 6,
        created_at: "2023-07-19T10:28:18.129Z",
    },
    {
        name: "Camiseta evening",
        description:
            "Dolorum sit rerum perferendis saepe inventore rerum quo amet. Dolor et illo quod provident dignissimos est voluptatem et. Eos veniam alias neque ad asperiores. Quia perferendis optio non soluta iure ipsa qui. Rerum dolores et ut sed excepturi omnis. Autem aut ut consequuntur quos cumque tenetur quia.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg",
        category: "t-shirts",
        id: "aad6019d-c833-48fa-bb0f-e3ee5ac1c638",
        price_in_cents: 4333,
        sales: 34,
        created_at: "2023-02-12T10:26:03.250Z",
    },
    {
        name: "Camiseta not today.",
        description:
            "Deserunt accusamus ut error. Molestiae omnis inventore quia id eum et ratione. Qui ipsum sint consectetur eligendi voluptas velit asperiores. Quaerat impedit explicabo recusandae aliquam pariatur. Quis aut molestias inventore molestiae quod.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        category: "t-shirts",
        id: "a2711145-b620-436d-962f-7087416ff765",
        price_in_cents: 6615,
        sales: 30,
        created_at: "2023-03-29T22:10:32.157Z",
    },
    {
        name: "Caneca preto fosco",
        description:
            "Consequatur ut sit. Qui qui vero dolor odio quis dolorum. Temporibus quia odio facere id assumenda. Quia voluptatem earum assumenda quibusdam voluptatem corporis iusto cum. Sapiente numquam necessitatibus repudiandae nam reprehenderit qui beatae unde.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg",
        category: "mugs",
        id: "641219c4-5781-443f-84a6-a0836cbb00f9",
        price_in_cents: 4734,
        sales: 0,
        created_at: "2022-12-19T18:01:06.065Z",
    },
    {
        name: "Caneca Decaf! P&Co",
        description:
            "Beatae accusantium nihil eius consequatur quis. Repudiandae dolore aspernatur autem inventore ea exercitationem aut. Ab velit ab est. Porro aliquam quas nemo ipsum rerum veritatis est. Qui tempora debitis et molestiae incidunt.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        category: "mugs",
        id: "deff7d9c-a254-4688-84dc-e63a43720450",
        price_in_cents: 2151,
        sales: 35,
        created_at: "2023-03-24T15:50:16.613Z",
    },
    {
        name: "Camiseta Broken Saints",
        description:
            "Consequuntur dolorum et molestias perspiciatis a accusamus sapiente. Ut mollitia sequi ut est iusto. Eius corporis natus eaque provident quia quo ut.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
        category: "t-shirts",
        id: "c2db99d1-d709-41fa-81f6-459c882edf1d",
        price_in_cents: 9059,
        sales: 8,
        created_at: "2022-12-30T18:03:00.134Z",
    },
    {
        name: "Camiseta Outcast",
        description:
            "Perferendis est eius sapiente voluptatibus sequi beatae quo vero ullam. Repellendus ullam est harum harum doloremque velit incidunt. Ipsam dignissimos odit odio natus quia quos saepe nulla.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
        category: "t-shirts",
        id: "d1ed966e-9928-49a9-9f5f-dfb67a9ad091",
        price_in_cents: 6961,
        sales: 34,
        created_at: "2022-12-05T08:23:38.869Z",
    },
    {
        name: "Camiseta Ramones",
        description:
            "Voluptate non quae. Tenetur suscipit magni sit maxime recusandae sit maxime. Tempore voluptatum repellendus et libero. Dolorem consectetur sed adipisci nostrum dolores in.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        category: "t-shirts",
        id: "2307aa46-eaa0-42f0-8651-1a0198bd6a6b",
        price_in_cents: 5914,
        sales: 33,
        created_at: "2023-02-21T12:14:06.510Z",
    },
    {
        name: "Caneca Black Ring",
        description:
            "Quis tempore labore molestiae minus incidunt ut officia facere. Est exercitationem non cupiditate dolorum doloribus. Rerum excepturi rerum ex harum ut placeat quasi. Magni tempora illo.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        category: "mugs",
        id: "e6318467-68a0-4ab5-95e4-7ceecb0d739e",
        price_in_cents: 2215,
        sales: 12,
        created_at: "2023-08-19T11:03:16.461Z",
    },
    {
        name: "Caneca Never settle",
        description:
            "Voluptatum mollitia sit sit eum molestiae assumenda sit. Voluptatem nihil reprehenderit minus vero alias sed vel suscipit. Non asperiores ut rem et aut saepe omnis suscipit. Laudantium aliquam consequatur commodi qui distinctio. Asperiores aut omnis. Quas et vero fugit assumenda odio assumenda officia modi.",
        image_url:
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        category: "mugs",
        id: "257c871e-f30d-4908-b42c-cf6c3d687520",
        price_in_cents: 5444,
        sales: 37,
        created_at: "2023-03-10T04:24:50.867Z",
    },
];

module.exports = { products };
