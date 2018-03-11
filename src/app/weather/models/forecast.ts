import {City} from './city';
import {List} from './list';

export interface Forecast {
  cod: string;
  message: number;
  cnt: number;
  city: City;
  list: List[];
}

export function generateMockForecast(): Forecast {
  return {
    'cod': '200',
    'message': 0.0079,
    'cnt': 40,
    'list': [
      {
        'dt': 1520802000,
        'main': {
          'temp': 7.29,
          'temp_min': 7.29,
          'temp_max': 8.8,
          'pressure': 994.39,
          'sea_level': 1001.86,
          'grnd_level': 994.39,
          'humidity': 95,
          'temp_kf': -1.51
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 4.71,
          'deg': 107.5
        },
        'rain': {
          '3h': 0.31
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-11 21:00:00'
      },
      {
        'dt': 1520812800,
        'main': {
          'temp': 8.09,
          'temp_min': 8.09,
          'temp_max': 9.22,
          'pressure': 993.5,
          'sea_level': 1000.9,
          'grnd_level': 993.5,
          'humidity': 92,
          'temp_kf': -1.13
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 80
        },
        'wind': {
          'speed': 3.48,
          'deg': 130.004
        },
        'rain': {
          '3h': 0.23
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-12 00:00:00'
      },
      {
        'dt': 1520823600,
        'main': {
          'temp': 7.69,
          'temp_min': 7.69,
          'temp_max': 8.45,
          'pressure': 992.06,
          'sea_level': 999.48,
          'grnd_level': 992.06,
          'humidity': 89,
          'temp_kf': -0.76
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 48
        },
        'wind': {
          'speed': 3.38,
          'deg': 132.501
        },
        'rain': {
          '3h': 0.01
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-12 03:00:00'
      },
      {
        'dt': 1520834400,
        'main': {
          'temp': 7.46,
          'temp_min': 7.46,
          'temp_max': 7.84,
          'pressure': 991.13,
          'sea_level': 998.56,
          'grnd_level': 991.13,
          'humidity': 98,
          'temp_kf': -0.38
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 3.73,
          'deg': 120
        },
        'rain': {
          '3h': 1.805
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-12 06:00:00'
      },
      {
        'dt': 1520845200,
        'main': {
          'temp': 9.24,
          'temp_min': 9.24,
          'temp_max': 9.24,
          'pressure': 991.46,
          'sea_level': 998.87,
          'grnd_level': 991.46,
          'humidity': 100,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 44
        },
        'wind': {
          'speed': 2.83,
          'deg': 121.001
        },
        'rain': {
          '3h': 0.355
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-12 09:00:00'
      },
      {
        'dt': 1520856000,
        'main': {
          'temp': 9.68,
          'temp_min': 9.68,
          'temp_max': 9.68,
          'pressure': 991.81,
          'sea_level': 999.32,
          'grnd_level': 991.81,
          'humidity': 96,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 3.36,
          'deg': 81.5007
        },
        'rain': {
          '3h': 0.855
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-12 12:00:00'
      },
      {
        'dt': 1520866800,
        'main': {
          'temp': 9.35,
          'temp_min': 9.35,
          'temp_max': 9.35,
          'pressure': 993.44,
          'sea_level': 1000.81,
          'grnd_level': 993.44,
          'humidity': 98,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 2.72,
          'deg': 16.0005
        },
        'rain': {
          '3h': 1.72
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-12 15:00:00'
      },
      {
        'dt': 1520877600,
        'main': {
          'temp': 9.23,
          'temp_min': 9.23,
          'temp_max': 9.23,
          'pressure': 996.25,
          'sea_level': 1003.73,
          'grnd_level': 996.25,
          'humidity': 98,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 2.88,
          'deg': 326.502
        },
        'rain': {
          '3h': 1.625
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-12 18:00:00'
      },
      {
        'dt': 1520888400,
        'main': {
          'temp': 7.64,
          'temp_min': 7.64,
          'temp_max': 7.64,
          'pressure': 1000.1,
          'sea_level': 1007.59,
          'grnd_level': 1000.1,
          'humidity': 100,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 4.47,
          'deg': 325.001
        },
        'rain': {
          '3h': 1.655
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-12 21:00:00'
      },
      {
        'dt': 1520899200,
        'main': {
          'temp': 6.33,
          'temp_min': 6.33,
          'temp_max': 6.33,
          'pressure': 1003.48,
          'sea_level': 1011.08,
          'grnd_level': 1003.48,
          'humidity': 100,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 4.81,
          'deg': 322.005
        },
        'rain': {
          '3h': 0.44
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-13 00:00:00'
      },
      {
        'dt': 1520910000,
        'main': {
          'temp': 5.45,
          'temp_min': 5.45,
          'temp_max': 5.45,
          'pressure': 1006.09,
          'sea_level': 1013.71,
          'grnd_level': 1006.09,
          'humidity': 100,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 4.91,
          'deg': 305.003
        },
        'rain': {
          '3h': 0.535
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-13 03:00:00'
      },
      {
        'dt': 1520920800,
        'main': {
          'temp': 5.71,
          'temp_min': 5.71,
          'temp_max': 5.71,
          'pressure': 1008.14,
          'sea_level': 1015.9,
          'grnd_level': 1008.14,
          'humidity': 98,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 3.92,
          'deg': 293.501
        },
        'rain': {
          '3h': 1.045
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-13 06:00:00'
      },
      {
        'dt': 1520931600,
        'main': {
          'temp': 6.54,
          'temp_min': 6.54,
          'temp_max': 6.54,
          'pressure': 1011.09,
          'sea_level': 1018.82,
          'grnd_level': 1011.09,
          'humidity': 98,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 5.53,
          'deg': 295.006
        },
        'rain': {
          '3h': 0.2
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-13 09:00:00'
      },
      {
        'dt': 1520942400,
        'main': {
          'temp': 8.04,
          'temp_min': 8.04,
          'temp_max': 8.04,
          'pressure': 1013.45,
          'sea_level': 1021.08,
          'grnd_level': 1013.45,
          'humidity': 99,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 24
        },
        'wind': {
          'speed': 4.75,
          'deg': 292.502
        },
        'rain': {
          '3h': 0.020000000000001
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-13 12:00:00'
      },
      {
        'dt': 1520953200,
        'main': {
          'temp': 8.51,
          'temp_min': 8.51,
          'temp_max': 8.51,
          'pressure': 1014.53,
          'sea_level': 1022.07,
          'grnd_level': 1014.53,
          'humidity': 92,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 801,
            'main': 'Clouds',
            'description': 'few clouds',
            'icon': '02d'
          }
        ],
        'clouds': {
          'all': 20
        },
        'wind': {
          'speed': 4.27,
          'deg': 273.503
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-13 15:00:00'
      },
      {
        'dt': 1520964000,
        'main': {
          'temp': 6.49,
          'temp_min': 6.49,
          'temp_max': 6.49,
          'pressure': 1015.4,
          'sea_level': 1023.03,
          'grnd_level': 1015.4,
          'humidity': 85,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 2.78,
          'deg': 249.5
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-13 18:00:00'
      },
      {
        'dt': 1520974800,
        'main': {
          'temp': 5.38,
          'temp_min': 5.38,
          'temp_max': 5.38,
          'pressure': 1015.74,
          'sea_level': 1023.49,
          'grnd_level': 1015.74,
          'humidity': 92,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 44
        },
        'wind': {
          'speed': 2.78,
          'deg': 209.5
        },
        'rain': {
          '3h': 0.069999999999999
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-13 21:00:00'
      },
      {
        'dt': 1520985600,
        'main': {
          'temp': 4.41,
          'temp_min': 4.41,
          'temp_max': 4.41,
          'pressure': 1014.98,
          'sea_level': 1022.69,
          'grnd_level': 1014.98,
          'humidity': 95,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 801,
            'main': 'Clouds',
            'description': 'few clouds',
            'icon': '02n'
          }
        ],
        'clouds': {
          'all': 20
        },
        'wind': {
          'speed': 3.32,
          'deg': 190.506
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-14 00:00:00'
      },
      {
        'dt': 1520996400,
        'main': {
          'temp': 4.7,
          'temp_min': 4.7,
          'temp_max': 4.7,
          'pressure': 1013.19,
          'sea_level': 1020.9,
          'grnd_level': 1013.19,
          'humidity': 98,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03n'
          }
        ],
        'clouds': {
          'all': 36
        },
        'wind': {
          'speed': 3.87,
          'deg': 177.5
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-14 03:00:00'
      },
      {
        'dt': 1521007200,
        'main': {
          'temp': 5.2,
          'temp_min': 5.2,
          'temp_max': 5.2,
          'pressure': 1011.04,
          'sea_level': 1018.76,
          'grnd_level': 1011.04,
          'humidity': 93,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03n'
          }
        ],
        'clouds': {
          'all': 32
        },
        'wind': {
          'speed': 4.31,
          'deg': 168.003
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-14 06:00:00'
      },
      {
        'dt': 1521018000,
        'main': {
          'temp': 7.65,
          'temp_min': 7.65,
          'temp_max': 7.65,
          'pressure': 1008.85,
          'sea_level': 1016.51,
          'grnd_level': 1008.85,
          'humidity': 86,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 801,
            'main': 'Clouds',
            'description': 'few clouds',
            'icon': '02d'
          }
        ],
        'clouds': {
          'all': 20
        },
        'wind': {
          'speed': 6.06,
          'deg': 168.502
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-14 09:00:00'
      },
      {
        'dt': 1521028800,
        'main': {
          'temp': 10.73,
          'temp_min': 10.73,
          'temp_max': 10.73,
          'pressure': 1006.28,
          'sea_level': 1013.73,
          'grnd_level': 1006.28,
          'humidity': 76,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'clouds': {
          'all': 32
        },
        'wind': {
          'speed': 7.62,
          'deg': 169.004
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-14 12:00:00'
      },
      {
        'dt': 1521039600,
        'main': {
          'temp': 11.28,
          'temp_min': 11.28,
          'temp_max': 11.28,
          'pressure': 1002.49,
          'sea_level': 1009.96,
          'grnd_level': 1002.49,
          'humidity': 72,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'clouds': {
          'all': 64
        },
        'wind': {
          'speed': 8.06,
          'deg': 162.003
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-14 15:00:00'
      },
      {
        'dt': 1521050400,
        'main': {
          'temp': 11.53,
          'temp_min': 11.53,
          'temp_max': 11.53,
          'pressure': 999.69,
          'sea_level': 1007.15,
          'grnd_level': 999.69,
          'humidity': 70,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 8.27,
          'deg': 163.001
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-14 18:00:00'
      },
      {
        'dt': 1521061200,
        'main': {
          'temp': 12.2,
          'temp_min': 12.2,
          'temp_max': 12.2,
          'pressure': 997.46,
          'sea_level': 1004.89,
          'grnd_level': 997.46,
          'humidity': 70,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 7.67,
          'deg': 164.002
        },
        'rain': {
          '3h': 0.045
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-14 21:00:00'
      },
      {
        'dt': 1521072000,
        'main': {
          'temp': 10.35,
          'temp_min': 10.35,
          'temp_max': 10.35,
          'pressure': 995.9,
          'sea_level': 1003.4,
          'grnd_level': 995.9,
          'humidity': 88,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 7.16,
          'deg': 162.002
        },
        'rain': {
          '3h': 1.54
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-15 00:00:00'
      },
      {
        'dt': 1521082800,
        'main': {
          'temp': 9.28,
          'temp_min': 9.28,
          'temp_max': 9.28,
          'pressure': 994.37,
          'sea_level': 1001.92,
          'grnd_level': 994.37,
          'humidity': 96,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 5.91,
          'deg': 166.503
        },
        'rain': {
          '3h': 2.62
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-15 03:00:00'
      },
      {
        'dt': 1521093600,
        'main': {
          'temp': 9.26,
          'temp_min': 9.26,
          'temp_max': 9.26,
          'pressure': 993.38,
          'sea_level': 1000.82,
          'grnd_level': 993.38,
          'humidity': 97,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 4.56,
          'deg': 166.508
        },
        'rain': {
          '3h': 1.41
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-15 06:00:00'
      },
      {
        'dt': 1521104400,
        'main': {
          'temp': 10.39,
          'temp_min': 10.39,
          'temp_max': 10.39,
          'pressure': 993.81,
          'sea_level': 1001.22,
          'grnd_level': 993.81,
          'humidity': 98,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 4.81,
          'deg': 170.001
        },
        'rain': {
          '3h': 0.059999999999999
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-15 09:00:00'
      },
      {
        'dt': 1521115200,
        'main': {
          'temp': 10.96,
          'temp_min': 10.96,
          'temp_max': 10.96,
          'pressure': 994.3,
          'sea_level': 1001.73,
          'grnd_level': 994.3,
          'humidity': 96,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 88
        },
        'wind': {
          'speed': 4.46,
          'deg': 181.504
        },
        'rain': {
          '3h': 0.22
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-15 12:00:00'
      },
      {
        'dt': 1521126000,
        'main': {
          'temp': 11.16,
          'temp_min': 11.16,
          'temp_max': 11.16,
          'pressure': 995.35,
          'sea_level': 1002.82,
          'grnd_level': 995.35,
          'humidity': 93,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 3.56,
          'deg': 191.5
        },
        'rain': {
          '3h': 0.029999999999998
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-15 15:00:00'
      },
      {
        'dt': 1521136800,
        'main': {
          'temp': 10.37,
          'temp_min': 10.37,
          'temp_max': 10.37,
          'pressure': 997.12,
          'sea_level': 1004.57,
          'grnd_level': 997.12,
          'humidity': 92,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 88
        },
        'wind': {
          'speed': 2.82,
          'deg': 237.006
        },
        'rain': {
          '3h': 0.17
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-15 18:00:00'
      },
      {
        'dt': 1521147600,
        'main': {
          'temp': 8.4,
          'temp_min': 8.4,
          'temp_max': 8.4,
          'pressure': 999.05,
          'sea_level': 1006.54,
          'grnd_level': 999.05,
          'humidity': 92,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04n'
          }
        ],
        'clouds': {
          'all': 76
        },
        'wind': {
          'speed': 2.57,
          'deg': 238.511
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-15 21:00:00'
      },
      {
        'dt': 1521158400,
        'main': {
          'temp': 6.78,
          'temp_min': 6.78,
          'temp_max': 6.78,
          'pressure': 1000.34,
          'sea_level': 1007.97,
          'grnd_level': 1000.34,
          'humidity': 97,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04n'
          }
        ],
        'clouds': {
          'all': 56
        },
        'wind': {
          'speed': 2.52,
          'deg': 218
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-16 00:00:00'
      },
      {
        'dt': 1521169200,
        'main': {
          'temp': 5.25,
          'temp_min': 5.25,
          'temp_max': 5.25,
          'pressure': 1000.84,
          'sea_level': 1008.43,
          'grnd_level': 1000.84,
          'humidity': 100,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 36
        },
        'wind': {
          'speed': 1.87,
          'deg': 189.503
        },
        'rain': {
          '3h': 0.02
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-16 03:00:00'
      },
      {
        'dt': 1521180000,
        'main': {
          'temp': 6.05,
          'temp_min': 6.05,
          'temp_max': 6.05,
          'pressure': 1001.05,
          'sea_level': 1008.67,
          'grnd_level': 1001.05,
          'humidity': 100,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 80
        },
        'wind': {
          'speed': 1.76,
          'deg': 145.005
        },
        'rain': {
          '3h': 0.33
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-03-16 06:00:00'
      },
      {
        'dt': 1521190800,
        'main': {
          'temp': 8.59,
          'temp_min': 8.59,
          'temp_max': 8.59,
          'pressure': 1001.6,
          'sea_level': 1009.15,
          'grnd_level': 1001.6,
          'humidity': 98,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 2.96,
          'deg': 164.503
        },
        'rain': {
          '3h': 0.54
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-16 09:00:00'
      },
      {
        'dt': 1521201600,
        'main': {
          'temp': 10.25,
          'temp_min': 10.25,
          'temp_max': 10.25,
          'pressure': 1002.76,
          'sea_level': 1010.28,
          'grnd_level': 1002.76,
          'humidity': 94,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 80
        },
        'wind': {
          'speed': 3.71,
          'deg': 199.502
        },
        'rain': {
          '3h': 0.059999999999999
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-16 12:00:00'
      },
      {
        'dt': 1521212400,
        'main': {
          'temp': 11.08,
          'temp_min': 11.08,
          'temp_max': 11.08,
          'pressure': 1003.8,
          'sea_level': 1011.37,
          'grnd_level': 1003.8,
          'humidity': 82,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 36
        },
        'wind': {
          'speed': 3.68,
          'deg': 212.505
        },
        'rain': {
          '3h': 0.010000000000002
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-16 15:00:00'
      },
      {
        'dt': 1521223200,
        'main': {
          'temp': 9.3,
          'temp_min': 9.3,
          'temp_max': 9.3,
          'pressure': 1005.68,
          'sea_level': 1013.16,
          'grnd_level': 1005.68,
          'humidity': 78,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'clouds': {
          'all': 36
        },
        'wind': {
          'speed': 3.36,
          'deg': 197.5
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-03-16 18:00:00'
      }
    ],
    'city': {
      'id': 2643743,
      'name': 'London',
      'coord': {
        'lat': 51.5073,
        'lon': -0.1277
      },
      'country': 'GB'
    }
  };
}
