**1. Information Display**

 `/<itemType> <name> <parts_of_data>`

> Display **information** in database 
> <itemType> : [character, weapon, artifact, tcg]
> <name> : item's name (E.g. `Hu Tao`)
> <parts_of_data> : [activeTalents, passiveTalents, constellation, team]



`/search <itemType> <subType...>`

> **Search** items by **TAGS** 
> <itemType> : [character, weapon, artifact, tcg]
> <subType...> : [element, weaponType, rarity, release_state, role, diceType, subType]



**2. Calculator** 

`/cal <sheetName> <itemType> <info...>`

> **Calculate** ascension material cost
> 
> <sheet_name> : Name of the Ascension Sheet (Auto create if missed)
> 
> <itemType> : [character, weapon, artifact]
> 
> <info...> : [doLater]



**3. Daily Highlights**

`/highlights`

> Display summary of today's highlights



`/birthday <month> <day>`

> Display who has **birthday**
> 
> <month> : [now,01,02,...,11,12]
> 
> <day> : [now,01,02,...,30,31]



`/character_asc <day_of_week>`

> Display **Character Ascension Materials**
> 
> <day_of_week> : [Monday, Tuesday,..., Sunday]



`/weapon_asc <day_of_week>`

> Display **Weapon Ascension Materials**
> 
> <day_of_week> : [Monday, Tuesday,..., Sunday]



**4. Other Function**

`/account setup <hoyoUID> <hoyoToken>`

> Setup account for using dailyMemo

`/account clean <dataType>`

> Clean your data
> 
> <dataType> : [All, Calculator, dailyMemo] 

`/dailyMemo <account>`

> Display your account's status (If you have already registed via `/account`)
> 
> > <account> : Selection, E.g. `901546986 -- 屑狐`


