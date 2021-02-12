export const londonWeather = [
  {
    LocalObservationDateTime: "2021-02-10T15:18:00+00:00",
    EpochTime: 1612970280,
    WeatherText: "Partly sunny",
    WeatherIcon: 3,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 2.4,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 36,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://m.accuweather.com/en/gb/london/ec4a-2/current-weather/328328?lang=en-us",
    Link:
      "http://www.accuweather.com/en/gb/london/ec4a-2/current-weather/328328?lang=en-us",
  },
];

export const fiveDays = {
  Headline: {
    EffectiveDate: "2021-02-10T07:00:00+00:00",
    EffectiveEpochDate: 1612940400,
    Severity: 7,
    Text: "Cold from Wednesday to Wednesday night",
    Category: "cold",
    EndDate: "2021-02-11T07:00:00+00:00",
    EndEpochDate: 1613026800,
    MobileLink:
      "http://m.accuweather.com/en/gb/london/ec4a-2/extended-weather-forecast/328328?lang=en-us",
    Link:
      "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2021-02-10T07:00:00+00:00",
      EpochDate: 1612940400,
      Temperature: {
        Minimum: {
          Value: 23,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 37,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us",
      Link:
        "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us",
    },
    {
      Date: "2021-02-11T07:00:00+00:00",
      EpochDate: 1613026800,
      Temperature: {
        Minimum: {
          Value: 27,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 31,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 31,
        IconPhrase: "Cold",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 7,
        IconPhrase: "Cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&lang=en-us",
      Link:
        "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&lang=en-us",
    },
    {
      Date: "2021-02-12T07:00:00+00:00",
      EpochDate: 1613113200,
      Temperature: {
        Minimum: {
          Value: 24,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 32,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&lang=en-us",
      Link:
        "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&lang=en-us",
    },
    {
      Date: "2021-02-13T07:00:00+00:00",
      EpochDate: 1613199600,
      Temperature: {
        Minimum: {
          Value: 31,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 32,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&lang=en-us",
      Link:
        "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&lang=en-us",
    },
    {
      Date: "2021-02-14T07:00:00+00:00",
      EpochDate: 1613286000,
      Temperature: {
        Minimum: {
          Value: 40,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 41,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&lang=en-us",
      Link:
        "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&lang=en-us",
    },
  ],
};

export const cities = [
  {
    Version: 1,
    Key: "328328",
    Type: "City",
    Rank: 10,
    LocalizedName: "London",
    Country: {
      ID: "GB",
      LocalizedName: "United Kingdom",
    },
    AdministrativeArea: {
      ID: "LND",
      LocalizedName: "London",
    },
  },
  {
    Version: 1,
    Key: "57911",
    Type: "City",
    Rank: 23,
    LocalizedName: "Longyan",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "FJ",
      LocalizedName: "Fujian",
    },
  },
  {
    Version: 1,
    Key: "77666",
    Type: "City",
    Rank: 25,
    LocalizedName: "Longgang District",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "GD",
      LocalizedName: "Guangdong",
    },
  },
  {
    Version: 1,
    Key: "2580116",
    Type: "City",
    Rank: 25,
    LocalizedName: "Longhua District",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "GD",
      LocalizedName: "Guangdong",
    },
  },
  {
    Version: 1,
    Key: "2332564",
    Type: "City",
    Rank: 25,
    LocalizedName: "Longnan",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "GS",
      LocalizedName: "Gansu",
    },
  },
  {
    Version: 1,
    Key: "2332955",
    Type: "City",
    Rank: 25,
    LocalizedName: "Longhui County",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "HN",
      LocalizedName: "Hunan",
    },
  },
  {
    Version: 1,
    Key: "2333548",
    Type: "City",
    Rank: 25,
    LocalizedName: "Longyang District",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "YN",
      LocalizedName: "Yunnan",
    },
  },
  {
    Version: 1,
    Key: "58368",
    Type: "City",
    Rank: 33,
    LocalizedName: "Long'an County",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "GX",
      LocalizedName: "Guangxi",
    },
  },
  {
    Version: 1,
    Key: "58726",
    Type: "City",
    Rank: 33,
    LocalizedName: "Longhua County",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "HE",
      LocalizedName: "Hebei",
    },
  },
  {
    Version: 1,
    Key: "61050",
    Type: "City",
    Rank: 33,
    LocalizedName: "Longchang",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "SC",
      LocalizedName: "Sichuan",
    },
  },
];
