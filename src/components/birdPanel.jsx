import React, { Component } from "react";
import BirdCard from "./birdCard";

class BirdPanel extends Component {
  state = {
    birds: [
      {
        name: "blue-tail",
        size: "small",
        lifeSpan: "15y",
        habitat: "africa",
        img:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUVFRUVFRUVEBUQFRUVFhUXFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGy0mHR0tLTItLS0tLy0tKy0rLS0tLS0rLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLf/AABEIALkBEQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwEEBQAGB//EAEMQAAIBAgQDBQUEBgkEAwAAAAECAAMRBBIhMQVBURMiMmFxBoGRobFCctHwFCNSYpLBMzRzgrKzwuHxU4O00hVDdP/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAuEQACAgEDAgUDBAIDAAAAAAAAAQIRAxIhMQRBBRMiUWFxgaGx0eHwMvEUM1L/2gAMAwEAAhEDEQA/ALwaQ0VmkKxvPNoQ5WnCAZ15SEOvOzwVMEiMQLmBaNIgwsCQIupGmLcRpgAJ04QrTQaItOEYRBAiYMi06EYBMgRN4BkyQI0MU0GMqRUugHUzGERFMyxTMTASyyVjXEAyWyWGrRbtBzRTPJQ0RUaIZoTmLM1SEHeHEqY+8uhoW0G0MwhM5AyVnWkXk3kWANp0mdGBZDQ1EWBDDSADMloE5jFYDKZjLxaGHFY0iGMDNJcxLGMBpaCTFq0OFiIAhrOEm0uwGGBCEFoxi2eLJklZR4pxFaItu52HTzM1w4ZZpqEeSMmRQjqZbZwPEQB5m0X/APIU/wBq/pPLVcQzm99+t5D0ag7yWYdBqfcu590+hxeEdNBJ5ZN/TZHly67LN1BJfk9UuLRtj8dIJaed4fXZtRlO4NmyMCOoa3vmtQqgHK2nlp7iCPzpFm8JxS3wS39mOPX5If8AbHb3RdDRqVZXZbajUHb8DbnOBnhZcMoScZKmj0oTjNaovYu55DNpKweQzzHQWEXimMhmg3hpoQcEiTmhRoALSQYUCXYDJxMAGERJkMHNJzQSJBkUAzNOirzo6AuXhKYJEC8yYDs04GLnJIAeDGgyuGh5o0FhuYpjJLxTGWh2GphXigYYktCGKYamLENYxDBAJjC0xeK8Ty9xD3juf2fTznT03Tz6iahBfwZ5csccdUh2N4itO4GrfT1nm6tTMxJ1J1vCY35/jfzguvWfY9H0WLp40t33Z4WbqJZZXLjshFRjfbcaXE1sLihlAZQCp8V7e83Gm8pVKJABChgd+Vj1tz0k0nOjajyBO3TLtIyQlKW4QmoxtFP2novVACAM4bPYAA1BlsfvEZS2utibc5U4OKwUtUUIvdCKBk1AsTlJ0uLX9Ou/oKVamCRVQMLcwRofqOgEfhnw51ZFC6ZbkJfba9jveeZm6d45a4Pg9LD1KyRUJrkTwvilrZrWJIIuL3BsQfrNoqNxqNbe42nleKdlTqXUkXAJHfRW8iyqQfjyljhftNR1XK6jfvMrrc87ixI93Kc2bqfPSU16l3N8PR+S24v0vsbzXgwcLxClVNlYE9L/AI2Pyj2WcrVG9CGWAZYKxLrMpJDAvGhtIkzryaAeTAnJJtJkxhqIRkosIyEwFmR2cO0aNomFFbsp0saToWFBskUwllzKzbyACEkaSEjAshggSJ14zJFVBGkIAtOzRZnRgNWOpxCiPSFjsbliyYWeYuO4jmbs6ZHmxOUab69NN52dH0c+qyaIfd+yMM2ZYo2x3EOIHwpvzPQeUxTTGtzqfzoY9qLG5BYgcxdQfS+s0OH4NWQ5s99LaAjXcWI1M+2xdJh6PDUPu+7PCyZMmae/JkmmQCTc9NL/APEkAHn8d/pHYkBWygklSQTlIvzttCqNyPTnYC99zzMhTtpmbi1syxRUZbXsR+bRL4YEghefTQw05aC55KdwPp8Y6g68xe50672Gk0T1HPK47oxOJIUNjvc7EEe78Jb4Z7Ls9mrMUG+UWzH1voPr6SzQwgOKQnUBSRfXUDT6g+6egYz5vxTM4ZNCPe8NxKcNbKo4ThgthSGxFySW1BHjJuNzsdIyoiZQpRSoAABUEADYWMaTEVJ50D1CuOG0L3FJARsVUKR6WlgiQDJvNGIi0BlhmQxmTRLKzrFx7xQEjgDqQloLFIIy8ykwJvBkqILyFyMK8JmlQtGqdJqwCnSLGRJ2Cy4xgi05jBMxQmSRGq0DLOVYAh4MCoJIMB2gmMr1BIAhOLwraRgQsagillbjPEuxp6eNtF8hzaaYMMs01CPLJnJRVsrcf4jl/Vp4j4jfwjp6zzf6WALX295PraValck6EknUnN8yYmnSLHuWIvqxGgn2/Swh0WLRj+77tnlZLyPVP/Q6niSGzLcctyLzZo4qplHLmdfwmVTTUW1tLhHv15biWszmmnwc+SrVF4V8xN21vck/7SEsRl11NjZvTrp1+MrZ7EDfb5S1hgp2IAI8zboLxwiqownJ8jRvble2p+VxLSV0S+XXZTudt2BPLUi0TiKQTL3hdtSTfS/rylWqozGx0BtpsbDceu8VJpE7pstUkPa0chv3vXu2Oa/uB+M9GVmH7OgPUd7eAADpdr3+S/OeiCT5vxXIp59uyPb8Og4Yd+5XYRbrHsIuoJxxO6yuRCAnESZoMEiA0ZIYSWhMrNBEfkimFplJCOBhq0QZKnWZ6RFkGC8APIbWPSMW28ZRMCGqc5MmIsToOadMtQDmWLYxheIdpIywjRkqo8crykMJhAcwy8UZLQgGhKIsxtGNICHYKC7GwAuZ4fi+Nas5b3AdByH56zZ9sOJgWoj7Ni33j4V9fxmXgeD1Gs7WQbhnF7637q8/pPpPDcCw4nlf+Uv0/k4s89Uq7L9SkmH5v3aYud7F/fyXzkWNQWVcqeWnyljE0Q72zHIuwPO3NjzMtL3RpOlSc+/9/Y4sktD35/v5KdFNbXvaX1Xn9LGKKEbaX8rw023Ovn+bTfG6dGE3YbgW8uXX4R1KoRbKLX69RzgUnFjfU7DkIwXvodhtvzuZ1Rdv6mDZo1KRN1N7FMxe1lB0GYa69DM41NAQCWBBAtc2J005te0v4nE9p3QBqLDlYfZW/lvLPs9hrsHI8K6adSR/7fGZZ8nkY5SfZGmKPm5IxRf4Fw/saQU+NjmfoGP2R5AWHumiFkgQ8s+RcnJuT7n0lKKpCGSJdZbYRTCNMRVZYtpZdYhxNEykABCCyUjAImwYnJE1VlwiKdJm2SZ7LBlqokrsIgBBjgLxBlihE2MHJGAaRxAiXbkJlJ2IG86RadM6EMEW0YILJCigAYYaABCtEDDDyc0UISmADVEsIwAJOwFz6DeVQYnjFS2HqkEA5ba+ZErHFzmo+4N0mzyHD6RxOKzN4cxduu+p93hHvm9x2t4QubXQAa6cuUyfYzVqrjYAIvTfU/ID0E1q4zPdjt+dJ9JKXpVHDS1P4MmrhArDNfqefyHONQXuLW9ektpfNfU267eUWUJYliT5A8/M8pEMmkjLh1sqm5/mYphqLHf8/hLq+Ejqd/WE9IaaDz5m3n+ec084w8iitSqdbXI0udfL3SxROpHp84k0CSLafWOw62/npvOnDnVnNlwSSuizTFjltY9edrbD4z03DaORAvPnMrh+GFxUJvppfr1mtTqazzvEer11iXbk7vD+m0Xkl9i4IaxIaMVp5Z6bCcRDCWCbxREBCHEQRLjCV3lpjsUgjQIEakTYEFYDCOtF1BIskqVZUrS7VlN1gAFNY6mYAEmnJkA4xYhZoIaZgFmkwLyIAEDOzSuCZKmSikMYzjBvJvIYM5dYYWdTEcqRxASZhe1LsypRU2uczt0Ube/e3pNzHYlKQuxF7XC8z+E892VTEk1LAA7enK34z2fDeljKSy5Nor8/Q5c+R1pju/0D4CAoNNBYW+nUy/VFxaI4RgGRzm0BBH/MvOhU2+c6etzweR6ePgOmwyUfVyV2U2sOfQXMVie4vd3/ADuZesPL+Ur4qijkC/UWGmnI/GcDynYsRTwuDZtWbS+nyuY/JY25m9+mm8ZRHdCi+ny8pYSgx+nuk+aw8lMqJRJ30lvD4O+40jsNQDXIOgNjbXUcpYY22g+oaVIzljiEDyjFMqhtYYM5k23uWlRpI8aGlGi0tU5sJjxOMi8EtIZJxiWEYWiWMLAEwhFsYQeJsBwMFpwaC5/PT1k2BXqypUEs4mroo6A/4jKztzgnYgZAkM0gGMYwGAWnMIN4tIws0mLnQ0iG5ZBWS5kgTJFoC8kTiJKjWZSBjsMkxeJ+0YJNPDEEDR65F1U9KYOjt57Dzge1VYkLRD2VtairfO3RPIHW/pKNHDKgBqgKo8FIfzHX8+c9TpOlhCKy5/tHu/r7Iwc5TenH932X7sGlhHq66kE7tqXPNmvv+RtofQYemlJe84Xmbt8Z56txKrrY5ByAAuB0vM8UKlZwigux87+rE8hNc2SeZ6pbJcLsl8G2OMcSqO7PTVPaKhmCU81VybKEQ6nyJsJtfo7Fe8AG/Z3t5X6ytwLgdPCi+jVSO8/+leg+s0S5vOGTXCL8xnnPafA1FpZ18OmYDyJ36Dzlf2d4ouI/VqmWoBoMwbMo5oeYnsqdWZXGPZrD1++B2VS9w9MZe9yLKNz56HziU9qY1N2NocLfdrL6zzHtHjay1jQByoLeEZcwIBJJ980qHGsRh2FDFDtCSBTqDTOL7ZrWJHmAdNb3vO4lXo4q9OvSdMjkXDlXQC+ZmspAXY66ag3lQi075Q9TZscP4eKNFKYHK5tzZtSfnBrCeSw2LxGDYrRc4igpF6VQdnVQE2HZ9eWi39BPScK4tQxSk0m7w8SN3XX1HMeY0kzi07IaJh02nVktAQQggsuI0sU2lKmJaSasTLBaBmgM0jPMm9yAy8DPa+l/z8ostFO52FydtASbnyEb4HFNukbXAsTTRv1iqwqHIrMAAjAFgrE+HNYrI47gEQq9Ak06jsADbukAkAPzBUMfdPP08XVZquFZeyqVaTJTAR+yqCxP6xidCNr8vS82OE0atbAqQwY0jm7Nu6wyHUEa2Nsymx06aTilnl7Ho/8AFhGNT5+PyVawqKCxU5UOVrKCVJ1vcan0+HnXWpq7A3UZHIB8SGymx9NfdPQ8Fr9tRtX8VerUuLgZaaHLTsRpeyK2n7UyVwQw2Kq0ye5Uou9K4zW71ip8rkfExSm5LYwzdPoipx4KGOIFrG43B8vMcjyPpK9VjkuDcKbEdC3P32t7paxVD9TTFu8tRgW/aDXt8GQ/xTNpP3K/Lurp59otr/OaY5alFr+2cgx1ZSAwtdVYejC4PwjEMjir93Dv+1QUe9CVi8Pc3OndGY+lwNPeROhPaxFgCFlgqb2jmqEnU7Cw8gOQj1b0CF9jOj5Eqyimwh3nVYdGc+ouiEUmZ3EuKZe5SN25tuB6fjJxmIq1e5QQhNjUPdB9L8pY4ZwRKfec52327oPpzPmZvjePF6p7y7L2+plKLlt2MqjhDTU1SDc/bbn6X5ShVqXJO7Hdufp5DynpPaoOaQKAkhhcDXu2OtvX6zzeBwr1TlVSepIsF9TOqGRZPXIr/GNROwmEeq2VBc8ydlHUz2PDcFToLlTUnxOd2P8AIeUXhMMtFMq7/abmx6ww8wy5dbpcAlRazQpXDTma0xoY8mC1WKLyCZAAcRprUpOrAEZSRfkwBKn3Geco45mq0MQneYUwxIsc7U8w3N79wWsb3uLa6T0dcDKQdiCDboRrPRYCnS/RQKACoF0ULZe6TmUqfeDfnNsUtmaY1ZX4PToY2nmyJUFnQhhcJScgou99BpcW28p5L249mlw3ZYimrtWV6aM1MWuSLZqunPSz21JA9PScD4Y2FxdHsqjdliC5NK2qKgLKVbclWshvuGU8p7PH8Mp1aWVyzqQFbXUre47y208xBqnaOl+raR8y4dxAOexqsvbKisyi3MX0sddCD75bySj7ZeyVXC4k4vDi9M5S4JDtTyizNcnVSoJvyI6TQp4hHQMpB0B03tYXNufKVqXKMXhdhARitBqUyviFr/yNjAzRt7GLTXIwNJgB5Oa+g+oHzMxJAqGVzUAILOUAINwbHQ3sDbcgWljKSbW16RdbAs4dcgvrZM4ObzU31H5vJnOKjTfJeKSjNM0cTicHXxFFjVdgQxZSQCCVsDfYb7W5CRwrFmliXanVWrSYtVbQqwXOEqm3O10c9c5PI3w6FM1KBo1MPbsywSqLJURr38RtmHIgxXs+ww9ZalSqHAzaBSNCpzq/JgQflOBraz18klV+xqcA4mnYgOSqipZipAyqzWWoLjukBwpty1+zNni+Kp/pOHFRe4vaUmaxylXpvs3XMiW9DPF8Or0i1RDTYqzOAhOWwDMwU6X1BYa69ya1bGUnw+GtTaowYBswZL01RhnZQcrHMCL+ZHlDeLZyecoxcewlBWy1KbXBpg1SSbZiGAt56gn3ecOvw2p2NR9D2tQd4tlAVSzFmJ01JG2plygFSitiGOi1XckKbsGUsd8vdC+kr8ZpiqtEmspIKIqIpyvmqWBS1gosD8JcHXBwSpOkV+NUMlPDJe9qbG+2jPcSsl1p/vVGCqOZCkEn+LKPcZb4yTVxJXZaYVAdwEQeLTrcn3iJr1Qhv9oDKq/9NfP948/Uzp11FLlkh9tkAS+u59Y2k15kIST1JPzmuKNswzXKKCwt9okArfyvv6zVR0rfkEOzSZXzzpdDBOsasUqR6LOVxLsYkO8G0iLSOxitCgCMlx2JZWrLFqLSxUldzLTFYV5JMhIeWVYWBeFaGEhASGFlfGuqIWdsotv6+XMz03s9iFbDo6+EjvjmrNY3NvPXYXvyFp4/j2CNRCyXzorWG9wbX066Sz7BcYZicO9+4pygk6pfVfdcEdLma4qo3xrY9wcDfKQe9RqF1NtcrIVK6W01HXaXv0gJewJW9zYiwUja3Ibn1uZlDEGmVdQWHgYCxOU6A2uNQbfHSW1xGVSCcoAI7y5xbextawynfyiyOmdMFaM7F1u0e4qFlKh6T7Aqd1BAsdtvOYHCfZVaNZ6xuwLMUW2RaQJc2sNCo7o980+H4c4Wk6ku9NGtSBqZ1KHvWUgWIGoseh6z0mAQMguDZj3A3iAY5Vv5f8TF2uO5qqfPY8txCgSltSaYuNPs3Nx62190yM09rXw2UGm4OYDKxsNRaxPp+ec8PtcdNJtje1HJ1K3tBXhIOpHpZj9BFiNpsOfy/wB5MnRyi8RXUXDFQD5lLfxAg/KJq10FgCljtncWJ5abf3sykcukDENVBuvbZTzV6DBT0YGnp6k28zKeNerkVcjs+e36zDU3VgR3VurWzXvz1vtprzOMJCLj4gklMRTelUSwz3zDL9lgx1K7eL4gmU6NGrSxCB7NTrCoA4BCkimxHPunTb4ROLTFqvZvTQKhUBCWpMl9AEDXBBvbKpYayCpsAqspuC1Jg3dax1CnWx115c+ROOhx27FRySiq7HcDIqquIZsnZPkyZgzsO73mTfQPYefrHinahTqioG79VOz0JWlmqFntfS428/QTE/RmR6eLw3dVAEqN2VkDqQV7QX0zXUEdUM0cSjUxTGQXei1gNBdyQFtytcm3QzplGNbGso3HUu5ool/14cFRaiU8PiazDz71iD+4ZZ7M1FVlsmVWZQBsKaDMPLvk29DKLu/YiplNNWqgDMDmY51GUA/cLH0EZWGSk17hqoVE80Pj8hZQWJ6taYKDTRzssLiwFOQ2dkVi2W9tFFh52PuJ+CMLge0BCuoYXJVjlLC1yQ2xN+tvhe00lQN3798WQLa41N2I6Xy6DU2jXy0dLh20IULlyG27nfMLnugkdSZtBabUeRisOnZWLELUbwhtBTH7bfvdB75b4DhywPdLB2A23VO+/wDoH96Z4w2ds5YKvhLsQFUAkE+ZsAPd5zawnFKWRqdHMVC5Ge2UKmpIUn7RJueep20mjyrTb5YjM7QTpd7ej/0B/G/4zpp5j/8AL/H7lV8kIsMCcsJpmM5DGZYkR6wGLYSA0NopohMhmizJMgRksldI1RFc5ZSAEqIWWcIawsYphaU62FXtFrKMtVdQwOXN+61twRpL1SKMEwi2nsbtB0qKKyMQ29tfFYd0jrt+dJt4imtRCw3IHUan/Y/TpMHgf9EPvt9WnosF4D6n/AJ0NJo7Yyex572HxBariKbspyupUKGFrgAMLnTUagec9Njx3rDusVIvpe21h5b89/WeR9if67i/vH/NaezxP9Kvo0elaR6vUUfafF2pUqmYK+dQ5tfQ5jYjflcCeI4hT75cDRjfe+psWF/Imb/tf/V8P/ar/kvMKt4T97/TJ7k5VcPoVKZ1/EX+RkNSqDVHB/ddAR6XWxEJY8TnnuziZSr4+uo0Smh65CUtzF9bf3iJVrNU0qCjRfOQpsSHa4PQhWHLTNvNoTMxn9I39kP8tJlKNUFCWxeHZhRxFV1A7t6jOxXrqCpI5EFbecrY3AV6bD9HdaiK2ZGTEGop07uVG1G9iAesdh//AK/up/qmV7PeL/vj6VZXELe4nsWsG1a1SguYCv2dNlABIubX1uCAMup3B3E7G4xqIZKr9qaKMlJgP2ypGm4HZkjW/iOumjvYDdfUf42mbjP6Jvuj/wAkQfNHRim9DRtvjKtqNMubIrM17X7wvV16GoQNTqPfKtXFOStQG1x2dInvGwtmZARYDQa26dZm8V3f7qf4nl8/0lD/APOv1eJbtfJg3uXlqpTucxzue84bM7HYKtRh8lXry0i8ZUqU0zLSyZiFTN3ajMdsoa7fJJOA/rx/sh9DG8V3/wC3U+kblXpIvcLhXCKfZ5sQzWQXslmLXOpzHRFJPi3N9+s1MQrm1MAIuyUwalgObFdL+plXhP8AU8V/a4f6mHT8Q+6Y4KlfyXFWOuOj/wAC/wDtOj506dL9xn//2Q==",
      },
      {
        name: "long-tail",
        size: "small",
        lifeSpan: "1y",
        habitat: "holand",
        img:
          "https://media.mnn.com/assets/images/2015/08/long-tailed-widowbird.jpg.653x0_q80_crop-smart.jpg",
      },
      {
        name: "blue-mouth",
        size: "medium",
        lifeSpan: "5y",
        habitat: "china",
        img:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEA8QDxAPEA8PDxAPEBANEA8QEBAPFREWFhcVFRUYHSggGBolGxYVITEhJSkrLi4uFyEzODMsNygtLisBCgoKDg0OGBAQGi0gICItLS0tLy4tLS0tLS0rLS0rLy0tLS0tLS0tKy0tLS0rLS0tLS0tLS0uLS0tLSstLS0tLf/AABEIAL4BCQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xAA8EAACAQIEAwUFBwIFBQAAAAABAgADEQQSITEFE0EGIlFhcRQygZGSI0JSobHB0VNyBzOC4fAVJGLC8f/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgMEBQb/xAAkEQEAAwACAwABBAMAAAAAAAAAAQIRAyEEEjFRBSJBkRMUYf/aAAwDAQACEQMRAD8A5fJHCy2aEdcPOZkqZIsku8mMaciqeWNaWzSjcqBAFkipJMkICAISGtOEBJFEigFOPy5OFhhZBAKUkVJNljhYD01lmmkjQS1REwkNy4xpS0FjFYYqFSlKdWlNWosr1EmUDMp07GdbwV9BOeZJrcLq2tN1JSXbYR5p0WnP4KvNehVm6GLTRpKDKaVJKryixeK8izxZ4Et415HnjZ5RITBMHNGLQgo0HNFmlHiooRzRl7lxjTnDraz2pSM0pomlBNKXRn8qCac0DSkbU5dFHlxcuWuXG5caqsFkirJeXCCSAVEMCEFhBZFMBCCxwIQEB1Es0RIVWS0zMUWxGIgqY94YgcSB1lhpEwlgVmWHh2sYZWBlmUSrcwOJ2m3hsT5zkKNW00sNjJtrdjMOtpYiWFrzmqWO85ZTHecz9kx0ArR+dMRcb5whjZfZGzzYubMgYuEMVL7GNXmxcyZYxUIYmZajS5kbmTP9oi9ol1HDZYOWSGDPO1vAVjZJJBMuiNkkbJJ4ssuimacbJLbJAKRorFY2WT5I4pxohCwssmCQgkmiELHyybJFlk0RgQ1hZY+WNBKYcC0QgEYJEeIiXQBEEiSWjFY0RGINCKxiI0EtYiTLiTKtpVqOTXpp91UZ29b2H7zKJGyuLMkXGGURCvJ7SNAY4whjpnXivHvKY1Vx3nJRjfOYuaOHmX+STG2MZF7b5zENQxc0y/5ZT1DeNeKDeamQ7xQRCEBwI9oopAiIJWHFaBHliCzRocOJTmPdafTTVvTy85UqcRwyd0g38WN/+fKbK8cymorRASWriEC50Vao8L5bDx01lPB9q8IpdaqUiyEqVCVSAb294t3h52mc8E/lNWLRS1hON4PEMaaIgfIWtTzhhpf4/Cch21yU65pU62ILoimohdTSBaxA93Rttel4jx5mfqTfG5Ux9NfvA26LY7mw/OCOJU9Petbewtva2+/lOFwGOU3psWUXNwxDjbU2BFzsAP4k+HrpqE7uV1BFM2U3I71idR0v5dZ6PD4njT1bf7cd+flrLsv+r0M2VnynX31ZdvWTYHH0q2blNmy7kA28NPlORxGNXvKXpE5gQ1QBu6bC9jYb6H0Mi9ry8o0ajDOuUPTeyh9bhh0Pd09ek3X/AEzhmJ9LdsaeZb+Yd/liKzA4Nxcq4o12zFtVZ2BZQbgXPUEjTrOjnkeR49+C3rZ3cfJW8bCHLGKyUiRCoDsQfQiaGZisjcgevhCZjsPnBsB5k/MygDpvK9epkDVCLmwUDqbnQDzJMtZep/8Akp8RqZVDkXWld8o+8wBC/mb/AAlgS08Rc2IIPna3zlgTzscVqmrzWqHMDfKNlHkJ3XD8YtZA6nyI8DM70mvbGJ/hbjRRpqZHjGK8YmUK8V4N494B2jWklorSaAtCAj2igOIrRAwoCAj2iEcSA3rMQFLMVAsAWNgPISBqSndVPqAZLaNLop1MAu6Eof8Ax2+I8JLhjTGmKoU3Q71KYAcaix1/Q/OSmMZnXkmBdw3CMFzaVdMRQpKGsoany6l9LpmJ6zA4jwLgxxVZq/FaxepUZqlJcgW5YnLmCdIPGOHipScZFdQpZkbRWUanXofOee4nCZDpcggMjG+Zlt1HiCCD6Tr47RaOmu8Y9c4d2X4JlDhRVUnKpr4ipZsx07txr02lni+I4Lw+ndqGEaoEAp0wq16775Rdr2F76kgCeKpTva9t9drnpv8AGW6OHXkhQFH2pW2wzHUE2300+c2ZMNcZacScZ7SHF1S/s+Hor0XD0lVd9yerec1+B8PpYwVPZyUx5VnOHqBDRxZW5tTOmR9iQd7aHcSHCdnqLAquLTnDdTSOTToDfT1N/SYIc0XzI3uvbNTbvI4OhB9RcEflM68lqpbirLTp1XSpQpsuWt7mQqRTdivfzWAKWIta3SX+G8eqo2fvMlPPSZSTlbIfuA9f9pZ47x2jjKdN2ovSx4sKuIpW5dVgAudl0s1vD0mRUZF90Bb5tdyQSLgAG9zlB+M9Gl681fW7hvvFbYeh0sSlWlnpsGVlNiPG2x8CDOL7N4bEF2a7JTZyTf12Ek7P8XSjzkqkojguLBnN+tgovcgj0nWK6BKbL7lRb0wqsCVHqJ4nLxTwXmsdvRpaOSsSNm6DeIJbfr1P7RlL2+zpgDqxNz8zFSUq2Z3Q790gsPjY/vOf1bgsZk4rHU6jmgpBazAka2ImjxgGtSdKbcot9+miKfTQXAPlOe7O8C9nZ6lS2f3VGbNYdTebKxWImZYTv8OUrUclYre+4BOgnT9kq9qj0+hW/wApi9rky1rrqG1a/Xaa3Y1VJDD3gpzAnb0E6LZPFLXPV4dfGivFOFvMYJEOMRACPHtFaXBYMaOY01hQTCgmUK8e8GKUGDJAZCJIIEkYxrxSBGCRCvJ6WFYguykIouS3dDeVz+vhLETPwZ3Faop0KlzrVQi3gl9/jb8pwuLZXpnXNy2BIH3Q2n6gfM+MtdqePNUqNTUqVv3zTOn9oPQCWuAcPVcLXq4jJlxSUxSFQEECmzMXAAvY6AeIF/CdfHWaLaImuOaygAgXIGpIBNlHj5SGmwYFQRlJDixF1YbEePXTznsX+G3GsJyjhVNJLu2VSyF2zWJv1N/2tOhxnZvCVCwbD0HLatamhb8tes22u5q09Z189NRqB2cObm4LZwBYzoOx/Z1cXVWkwZ01es6XAC2OUBt9+vraemL/AIf4AOTy2FzfKajZR6DoJuVKWE4fQJvRo013LMApPiT94zHW2ZcBxL/DBy//AGdZRTYe5ic2ZdfxKO8LeXSY3GOx2JwVAVsQaJTOqHlOSy3vY6qL7W+M9EodqaFVKtXD4ilU5Ss5QOodlUXayk+ANp5/2o7cVcfSWitPk0SQ9TvZnYqQygEbDS/np8dnDyW9oxz8tKzWdczQxhoVqdTRsjm4Y+9cany3/Kek0eI0zTQg2zKCLKAdRe2ZmvPMMDw9sTiAig5AQXIuRYX3M9LoOAi0wWUKoUK9m26DTUfCZebyVtbI+svGpNa9gq1Q3U/6nzQkIA2B87mGEHgv+mwiNHzt/d/O04JdIWIP3f1MBvS0kKEdBI3vbb5GY6POu0zmpiGF9ja3UeM2uyVDJVYA6cvXw6WmV2iwjZzVsyvfvk6d7ow9R+d5W7P4+qtcZSLsQDoWuL7eU7N3j9YaZifbXpkUcLHyzhbjRWhBYWWXQForQ8sWWARiitFNYYwTDjESwI48e0UyCEMQBL3DcDzSSxy0195v2HnERM9QI8Nh3qNlpqWPgOnr4TZo8BC61nN/wUtfmx/YSm/aqhRvSw1M1WG/KuEB8Wf7xkZ7S4ojSnST1Jv+82xSlfvZkruMp1UU+x4UM/RmtcfFpw3GuCcVxBOejWfXUGtSyfAFxYfCWeMdscdRu1ShXan1ag9IqPXQkfKcvxPt7VrD7KtjcMcv3WpVEf52I+Bm+tvxDGeh0uBphGL8TyIEtkwudHasx25mUkLT/M7aC93xna3nK5NMBgoYByt82trW6Cw0HpOI5zO5eozOzfeqFi3zO8u4Y6gn+ddbWt6zOI1hbkxMyOW5ifZlu93CRbXoQfGbuG7a40CnTatmambo9RVZwMtrFrd4eTA7A6TKbFhh4bdd5Vdhre197kj/AJfaZTWIaa8lp+t7i3ajFYi3MrMqggqtN3ChgBqATYbaAAW1mbjeI4jEBRiMRXrKh7orVXcKT1sT4dZl0sULm50Gnn4yf2nqNvDaWMZdo8ZQ2OxB/XfWFdlFlvYKB1Pl+8I1A3gDpt18pc4XTFWvRU7GqinwIuCZPnZ9yJegdnsCKOHojIFqGmhqEDVntc3M0KlMNvDEU82bbOumIVmom+puPzHoY+Rhqrk+uvz6yxBK9RoZYsqsKhG4+K6iI1uo19JOzeIlDirKtN3vlygm43ljtHL9rOII55Qy5rbk38DpM3s4qrVSxN7g6+N9JkY2tzKjEkm+uu86bsNw9ncv91SNT+k7Yn0pLVPcu+VJItOGiyZFnn63YhFKPypZCx8saqmaUbly2Vg5JdRSIjQjBMxQoo0a8oRgwiY15QoeIqGoi02P2agjIugYk3u3iZHFeNCRAosoAHgBYQrxrx4D3nN8b7J067F6ZFF2vmyqGRm/EV6HxtOivGJmVZmO4Jh5ZxngNfC61FD0v6tP3f8AUN1+PzmZSuDdTlP5T2RgCCCLg6EHUEeE847R4GjTxLLQIC5QWXdUfwHwsbdLzp4rzbqWm9YiNYfPexW4+I384wRTbP6bydxlOovpofD1lZVLEk7X6eF5ulqjDvhgTYbCCmndG19SbS1ybkXIF/A721MVWwFlsPTyl9c7WL70rXN7DY67Tq+w+DD1ixHdojNr1c7fuZz+FQC50/aeidkcEKWGU/eq/aHpofdHy/WauWfWm/lsr3LciEUU4G89414rRWgC2s4vtVje6wQ6W1+og/mBO1yzjeJ8IqEVu6SUrswG+ajUsRb0YTbxZvbG3xy+HwPMdANSSBYeE9X4Xg1o00poLADXzPWc52d7PlG5lUDT3ROrUzb5HL7dQw4653KdZMkgUyZGnJLcmEeCDHvIGaDExgXgUSYBMZmgEzYgrxrwbxXjEFeK8G8UByYwMUVoU+aLNBihBXkOJxSUlL1HVFHViB8pn8X43Tw4I9+p0Ren9x6TheJYyrXbPVYm3uqTZUv0UTq4fFvfueoa7ckR01+NdqalTMmHGRNix/zGHlr3R+c56lTa5Op8db3vLuFw4YDQ38AdbS2MKFHT/eepTxfSOocHL5MfGNjwy5bXKnppI8HdtSNBfwl3jDZgoFsxOgXoLG36wqNEKqg7kC58zvJPFE2YRy5xx+ZVkpnca2Fvif8AhjBNdR6+UspT3b8vHpGZtNLba2/3ieKPsrHLPyE/CcAa9WnSA0LAsRsEHvX/AOdZ6eoAAA0AAAA6ATn+yHCOTS5ri1WsBofu073At0PUzoJ5PkcnvbI+Q9Hir6x2eEBBENZzS2nCwssJRDCzHRGEjmnJgsfLGqrlINpZKyNll0Rgw1eAVjSonFWPzZWvGvGCw1SDnkBMbNGCAmMYwMe8zQ0eK8V4CiiEeAo8GR4iutNSzsFA8f28ZYiZnIEpMwOLca3Shv1qeH9vifOV+I8Rat3V7tPqPvN5n+JnimBsfnPb8P8AS/l+X+nDzeVEdVVHAtc3JPjuTKJpktc3sD8tL/Oba0AT0J/IR/Z1HS/nPa/1onHmz5WbirgaJILbDqf2ix5yrmX0HmZbcgdPQSjiCMtz52HU62P6zZekVpjli02v7SqphsoBbViMxO9utojsfM6mR1K+4A662gVax/PqZ5WxDsiJn6JnXb/czd7K8GFVhWqD7JD3FItnYHf0BlTs72ebENzat1oA6W0NUjoD0HnO+poFAVQAALADYCeX5Xlfa1ej4/BmWlJeOIF44M8x2jBkiyEGSAzFU6yRZXVpKryKsKI9pGrw80ikRAYQi0BjKIyIBhsZGTKgTBJiJgEzJDkwbxiY14EAMe8iDQg0yRJeK8jzRZoEl495C1QAEkgAbkmwExcbxcuSlIgDbNfU+k6fG8Tk8i2U/tq5eWvHGy0eIcVSkDrmYfdGtvXwnLYnGtWYs1z4X0UeQHSE+19NSRmv+g/eJbAW7vXW42n0vi/p3Hw/9n8vL5fLmyFL3J/MXlqhStvtqdr6x0y5SxsL7bbfz/MKnbbS5NrA6CelFYhw35NGjDU7dRrGaoOnlcnr4wBUUE3I01Ov6Stia6m5uPIXlmcac2TYmvrb4/CZtVy5uNANifztGNYFswa/lHqsLbg+Wl9fDznn83J7OqlPUK0trXJJ6Akn+fCdPwLsyNKuJHgVpHp4F/4ljs7wgUgKtQfaEd1Try1P/tN8NPn/AC/L39lPj1vH8fP3W+jAtoNANgNhBvGzRs0812ivHBkeaPnkEoMIGQhx4x8/nAnDQg0rh4XMjBZDwxUlTmR+ZGLq1zIi8q82OKnnMTU5aCTI+Z5xi8BzI2MReAziUK8V4BYeIjZvMQPZPZk/An0rF7Mn4E+lZLFPSakXsyfgT6Vi9mT8CfSslikwQnC0/wCmn0rG9jpf0qf0L/EnilEHsdP+nT+hf4i9jp/0qf0L/Enil2UyEHsdP+nT+hf4mficXh0LgUlZqdSjTcLSvY1XRR0198GwmvKlThtJn5jKWfu6s9QgZXVxlF7L3kU6b2jZMhVbE4bKWyKbAG3J72ufS1t703FvESv/ANTwgVmqU1pgMqXqUbZmakKlhpvlP5TQPCqOYNkNwSffqWJJc6i9jrUffxgjg9HSwqCxUgitXDAhcoIOa98vdv1GkbJkK7YvCD7i++tMEUCQzsgcAHLr3SDpBTGYXrSVSKlVNaF/8ury2a4Gi3tr5y9iOG0qiujqxSobuBUqDOcoXvWOosBptAbhNEm5U3zM9uZUAuzBmFr2sWAJXa+tpFxXq8Qw65O4Mr1TSU8ojM4VjZNO/wC4R3byzWq0UYKyjMVzm1MkKnixAso9fCM3CaJFihIzlwC9QhHIYXQX7nvHa0kbh9MkEhiQGF+ZU7ysSSra95bk6G4EYKT8TwoXMVsBmJ+wqXUKquSRluBlYG/nLVOrQKPUyqFp5s5enkKZRc3BFxprGXhFEKy5CQyujZnqMSrqqsLk391VHlbSWkoKuew/zGLPe5zEgDr5ARgpVK9I0RXpJRq0ygqBgUVDTtfNmttaVaXEab1BTXD2ZkDDOqqcxpCplOlhobb3vfS2s0sVgadVBTcHIpVgKbvTsVNxqhBsD0gDhdLNns2bx5lX3uXy8/ve/l0z+9brGDObitIDDE0B/wBwqtay9wM6Lqba6uPDY+kkxHEKdOnXdqAzUXZBTXIWqEUxU7p/tN/KxllOC0QKahWtSsEvVrNoGDANdu8AQDY3EJuEUSKqshda5LVBVepUBOXLcBicumndtsIwVsVjUpkhqCkcpqylMhJVQt8wt3RdrX8jKy8aoHl/Z07PUFK4KEZzW5Qyad/vWJtsCDNOnwukrO6h1aooRstWsFyquUAKGstgNLAdfGOOG0hkFmtTbOoNSqQXzZszAmztm1u1zeME/s6fgT6Vi9nT8CfSslijBF7On4E+lYvZ0/An0rJYowRezp+BPpEXs6fgT6RJYpMEXs6fgT6Vi9mT8CfSslilwRezJ+BPpWL2ZPwJ9KyWKMH/2Q==",
      },
      {
        name: "pink-beak",
        size: "large",
        lifeSpan: "115y",
        habitat: "africa",
        img:
          "data:image/jpeg;base64,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",
      },
      {
        name: "flamingo",
        size: "extra large",
        lifeSpan: "5m",
        habitat: "africa",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDR_vthK0yMiuGjiYI7Q7ydbsMOIEdlqIJhE8hVALtCN36Q-ETQ&s",
      },
    ],
  };
  render() {
    return (
      <div>
        <div>Welcome to the Bird Panel</div>
        <div className="flex">
          <div>
            <ul>
              {this.state.birds.map((bird) => (
                <li key={bird.name}>{bird.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <BirdCard birdIndex={this.props.activeBirdIndex} />
          </div>
        </div>
      </div>
    );
  }
}

export default BirdPanel;
