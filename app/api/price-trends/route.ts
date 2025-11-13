import { NextResponse } from "next/server"

// ------------------------------------------------------------------
// PASTE YOUR CSV CONTENT HERE
// Copy the entire content of 'global_raw_material_long_for_supabase.csv'
// and paste it inside the backticks below.
// ------------------------------------------------------------------
const csvFileContent = `MonthYear,Material,Price
2010-01-01,Urea Indonesia FOB,325.75
2010-02-01,Urea Indonesia FOB,319.75
2010-03-01,Urea Indonesia FOB,331.0
2010-04-01,Urea Indonesia FOB,303.8
2010-05-01,Urea Indonesia FOB,270.25
2010-06-01,Urea Indonesia FOB,268.0
2010-07-01,Urea Indonesia FOB,268.4
2010-08-01,Urea Indonesia FOB,272.5
2010-09-01,Urea Indonesia FOB,284.0
2010-10-01,Urea Indonesia FOB,312.5
2010-11-01,Urea Indonesia FOB,352.0
2010-12-01,Urea Indonesia FOB,380.0
2011-01-01,Urea Indonesia FOB,385.0
2011-02-01,Urea Indonesia FOB,390.0
2011-03-01,Urea Indonesia FOB,384.2
2011-04-01,Urea Indonesia FOB,358.25
2011-05-01,Urea Indonesia FOB,361.0
2011-06-01,Urea Indonesia FOB,493.6
2011-07-01,Urea Indonesia FOB,511.0
2011-08-01,Urea Indonesia FOB,498.0
2011-09-01,Urea Indonesia FOB,505.0
2011-10-01,Urea Indonesia FOB,514.0
2011-11-01,Urea Indonesia FOB,493.0
2011-12-01,Urea Indonesia FOB,468.0
2012-01-01,Urea Indonesia FOB,421.5
2012-02-01,Urea Indonesia FOB,424.5
2012-03-01,Urea Indonesia FOB,419.0
2012-04-01,Urea Indonesia FOB,443.0
2012-05-01,Urea Indonesia FOB,518.0
2012-06-01,Urea Indonesia FOB,518.0
2012-07-01,Urea Indonesia FOB,442.3333333333333
2012-08-01,Urea Indonesia FOB,447.0
2012-09-01,Urea Indonesia FOB,400.5
2012-10-01,Urea Indonesia FOB,394.5
2012-11-01,Urea Indonesia FOB,391.2
2012-12-01,Urea Indonesia FOB,385.0
2013-01-01,Urea Indonesia FOB,391.4
2013-02-01,Urea Indonesia FOB,401.0
2013-03-01,Urea Indonesia FOB,397.0
2013-04-01,Urea Indonesia FOB,396.75
2013-05-01,Urea Indonesia FOB,389.4
2013-06-01,Urea Indonesia FOB,346.25
2013-07-01,Urea Indonesia FOB,335.0
2013-08-01,Urea Indonesia FOB,331.2
2013-09-01,Urea Indonesia FOB,316.0
2013-10-01,Urea Indonesia FOB,318.0
2013-11-01,Urea Indonesia FOB,324.5
2013-12-01,Urea Indonesia FOB,331.0
2014-01-01,Urea Indonesia FOB,332.6
2014-02-01,Urea Indonesia FOB,333.0
2014-03-01,Urea Indonesia FOB,320.75
2014-04-01,Urea Indonesia FOB,302.5
2014-05-01,Urea Indonesia FOB,287.8
2014-06-01,Urea Indonesia FOB,285.75
2014-07-01,Urea Indonesia FOB,284.8
2014-08-01,Urea Indonesia FOB,294.5
2014-09-01,Urea Indonesia FOB,296.0
2014-10-01,Urea Indonesia FOB,292.0
2014-11-01,Urea Indonesia FOB,291.0
2014-12-01,Urea Indonesia FOB,291.0
2015-01-01,Urea Indonesia FOB,291.8
2015-02-01,Urea Indonesia FOB,293.0
2015-03-01,Urea Indonesia FOB,281.0
2015-04-01,Urea Indonesia FOB,271.0
2015-05-01,Urea Indonesia FOB,289.75
2015-06-01,Urea Indonesia FOB,305.25
2015-07-01,Urea Indonesia FOB,289.0
2015-08-01,Urea Indonesia FOB,282.0
2015-09-01,Urea Indonesia FOB,269.0
2015-10-01,Urea Indonesia FOB,255.6
2015-11-01,Urea Indonesia FOB,256.75
2015-12-01,Urea Indonesia FOB,244.2
2016-01-01,Urea Indonesia FOB,215.5
2016-02-01,Urea Indonesia FOB,207.5
2016-03-01,Urea Indonesia FOB,210.0
2016-04-01,Urea Indonesia FOB,219.75
2016-05-01,Urea Indonesia FOB,214.25
2016-06-01,Urea Indonesia FOB,208.4
2016-07-01,Urea Indonesia FOB,197.75
2016-08-01,Urea Indonesia FOB,196.5
2016-09-01,Urea Indonesia FOB,197.0
2016-10-01,Urea Indonesia FOB,199.25
2016-11-01,Urea Indonesia FOB,219.25
2016-12-01,Urea Indonesia FOB,218.8
2017-01-01,Urea Indonesia FOB,239.0
2017-02-01,Urea Indonesia FOB,252.25
2017-03-01,Urea Indonesia FOB,237.6
2017-04-01,Urea Indonesia FOB,223.0
2017-05-01,Urea Indonesia FOB,217.0
2017-06-01,Urea Indonesia FOB,220.4
2017-07-01,Urea Indonesia FOB,212.5
2017-08-01,Urea Indonesia FOB,209.6
2017-09-01,Urea Indonesia FOB,232.25
2017-10-01,Urea Indonesia FOB,269.75
2017-11-01,Urea Indonesia FOB,264.6
2017-12-01,Urea Indonesia FOB,255.66666666666663
2018-01-01,Urea Indonesia FOB,284.25
2018-02-01,Urea Indonesia FOB,288.25
2018-03-01,Urea Indonesia FOB,280.0
2018-04-01,Urea Indonesia FOB,260.0
2018-05-01,Urea Indonesia FOB,258.8
2018-06-01,Urea Indonesia FOB,262.0
2018-07-01,Urea Indonesia FOB,271.5
2018-08-01,Urea Indonesia FOB,276.2
2018-09-01,Urea Indonesia FOB,295.75
2018-10-01,Urea Indonesia FOB,312.0
2018-11-01,Urea Indonesia FOB,311.4
2018-12-01,Urea Indonesia FOB,293.6666666666667
2019-01-01,Urea Indonesia FOB,284.0
2019-02-01,Urea Indonesia FOB,267.25
2019-03-01,Urea Indonesia FOB,252.25
2019-04-01,Urea Indonesia FOB,258.0
2019-05-01,Urea Indonesia FOB,276.0
2019-06-01,Urea Indonesia FOB,286.0
2019-07-01,Urea Indonesia FOB,284.25
2019-08-01,Urea Indonesia FOB,267.8
2019-09-01,Urea Indonesia FOB,258.0
2019-10-01,Urea Indonesia FOB,252.0
2019-11-01,Urea Indonesia FOB,238.0
2019-12-01,Urea Indonesia FOB,242.0
2020-01-01,Urea Indonesia FOB,239.8
2020-02-01,Urea Indonesia FOB,232.5
2020-03-01,Urea Indonesia FOB,251.0
2020-04-01,Urea Indonesia FOB,237.0
2020-05-01,Urea Indonesia FOB,228.75
2020-06-01,Urea Indonesia FOB,233.0
2020-07-01,Urea Indonesia FOB,231.8
2020-08-01,Urea Indonesia FOB,269.5
2020-09-01,Urea Indonesia FOB,266.0
2020-10-01,Urea Indonesia FOB,261.4
2020-11-01,Urea Indonesia FOB,262.25
2020-12-01,Urea Indonesia FOB,268.0
2021-01-01,Urea Indonesia FOB,301.75
2021-02-01,Urea Indonesia FOB,352.5
2021-03-01,Urea Indonesia FOB,351.75
2021-04-01,Urea Indonesia FOB,340.2
2021-05-01,Urea Indonesia FOB,347.75
2021-06-01,Urea Indonesia FOB,414.0
2021-07-01,Urea Indonesia FOB,472.4
2021-08-01,Urea Indonesia FOB,447.25
2021-09-01,Urea Indonesia FOB,452.2
2021-10-01,Urea Indonesia FOB,697.5
2021-11-01,Urea Indonesia FOB,952.5
2021-12-01,Urea Indonesia FOB,985.0
2022-01-01,Urea Indonesia FOB,760.0
2022-02-01,Urea Indonesia FOB,588.0
2022-03-01,Urea Indonesia FOB,904.8
2022-04-01,Urea Indonesia FOB,861.25
2022-05-01,Urea Indonesia FOB,660.75
2022-06-01,Urea Indonesia FOB,569.2
2022-07-01,Urea Indonesia FOB,536.0
2022-08-01,Urea Indonesia FOB,517.0
2022-09-01,Urea Indonesia FOB,623.6
2022-10-01,Urea Indonesia FOB,612.0
2022-11-01,Urea Indonesia FOB,566.5
2022-12-01,Urea Indonesia FOB,499.0
2023-01-01,Urea Indonesia FOB,485.0
2023-02-01,Urea Indonesia FOB,426.0
2023-03-01,Urea Indonesia FOB,334.6
2023-04-01,Urea Indonesia FOB,339.75
2023-05-01,Urea Indonesia FOB,335.0
2023-06-01,Urea Indonesia FOB,301.0
2023-07-01,Urea Indonesia FOB,319.0
2023-08-01,Urea Indonesia FOB,376.2
2023-09-01,Urea Indonesia FOB,383.5
2023-10-01,Urea Indonesia FOB,392.75
2023-11-01,Urea Indonesia FOB,370.0
2023-12-01,Urea Indonesia FOB,344.0
2024-01-01,Urea Indonesia FOB,341.5
2024-02-01,Urea Indonesia FOB,386.2
2024-03-01,Urea Indonesia FOB,357.75
2024-04-01,Urea Indonesia FOB,323.5
2024-05-01,Urea Indonesia FOB,307.0
2024-06-01,Urea Indonesia FOB,330.5
2024-07-01,Urea Indonesia FOB,340.75
2024-08-01,Urea Indonesia FOB,373.4
2024-09-01,Urea Indonesia FOB,369.5
2024-10-01,Urea Indonesia FOB,382.6
2024-11-01,Urea Indonesia FOB,381.0
2024-12-01,Urea Indonesia FOB,378.0
2025-01-01,Urea Indonesia FOB,395.4
2025-02-01,Urea Indonesia FOB,436.5
2025-03-01,Urea Indonesia FOB,407.25
2025-04-01,Urea Indonesia FOB,395.25
2025-05-01,Urea Indonesia FOB,364.8
2025-06-01,Urea Indonesia FOB,385.5
2025-07-01,Urea Indonesia FOB,420.6
2025-08-01,Urea Indonesia FOB,443.5
2025-09-01,Urea Indonesia FOB,394.5
2025-10-01,Urea Indonesia FOB,383.0
2010-01-01,Urea China FOB,301.0
2010-02-01,Urea China FOB,314.0
2010-03-01,Urea China FOB,312.5
2010-04-01,Urea China FOB,274.6
2010-05-01,Urea China FOB,261.25
2010-06-01,Urea China FOB,249.75
2010-07-01,Urea China FOB,260.4
2010-08-01,Urea China FOB,271.5
2010-09-01,Urea China FOB,304.4
2010-10-01,Urea China FOB,327.5
2010-11-01,Urea China FOB,350.5
2010-12-01,Urea China FOB,371.0
2011-01-01,Urea China FOB,388.25
2011-02-01,Urea China FOB,395.25
2011-03-01,Urea China FOB,371.8
2011-04-01,Urea China FOB,345.0
2011-05-01,Urea China FOB,390.25
2011-06-01,Urea China FOB,477.6
2011-07-01,Urea China FOB,481.25
2011-08-01,Urea China FOB,493.25
2011-09-01,Urea China FOB,503.2
2011-10-01,Urea China FOB,499.0
2011-11-01,Urea China FOB,498.25
2011-12-01,Urea China FOB,450.25
2012-01-01,Urea China FOB,390.0
2012-02-01,Urea China FOB,385.0
2012-03-01,Urea China FOB,393.0
2012-04-01,Urea China FOB,451.25
2012-05-01,Urea China FOB,498.6
2012-06-01,Urea China FOB,435.0
2012-07-01,Urea China FOB,389.25
2012-08-01,Urea China FOB,380.4
2012-09-01,Urea China FOB,374.25
2012-10-01,Urea China FOB,383.75
2012-11-01,Urea China FOB,381.6
2012-12-01,Urea China FOB,385.25
2013-01-01,Urea China FOB,392.0
2013-02-01,Urea China FOB,404.5
2013-03-01,Urea China FOB,393.0
2013-04-01,Urea China FOB,380.75
2013-05-01,Urea China FOB,344.2
2013-06-01,Urea China FOB,305.5
2013-07-01,Urea China FOB,298.5
2013-08-01,Urea China FOB,291.4
2013-09-01,Urea China FOB,285.75
2013-10-01,Urea China FOB,288.2
2013-11-01,Urea China FOB,316.0
2013-12-01,Urea China FOB,324.25
2014-01-01,Urea China FOB,335.4
2014-02-01,Urea China FOB,331.75
2014-03-01,Urea China FOB,309.0
2014-04-01,Urea China FOB,293.75
2014-05-01,Urea China FOB,283.4
2014-06-01,Urea China FOB,258.0
2014-07-01,Urea China FOB,258.6
2014-08-01,Urea China FOB,282.75
2014-09-01,Urea China FOB,288.75
2014-10-01,Urea China FOB,290.2
2014-11-01,Urea China FOB,292.0
2014-12-01,Urea China FOB,287.5
2015-01-01,Urea China FOB,288.0
2015-02-01,Urea China FOB,288.5
2015-03-01,Urea China FOB,277.75
2015-04-01,Urea China FOB,267.6
2015-05-01,Urea China FOB,291.75
2015-06-01,Urea China FOB,303.75
2015-07-01,Urea China FOB,286.0
2015-08-01,Urea China FOB,276.0
2015-09-01,Urea China FOB,266.5
2015-10-01,Urea China FOB,253.2
2015-11-01,Urea China FOB,252.75
2015-12-01,Urea China FOB,240.8
2016-01-01,Urea China FOB,212.75
2016-02-01,Urea China FOB,203.0
2016-03-01,Urea China FOB,208.0
2016-04-01,Urea China FOB,220.0
2016-05-01,Urea China FOB,214.0
2016-06-01,Urea China FOB,206.0
2016-07-01,Urea China FOB,197.25
2016-08-01,Urea China FOB,192.75
2016-09-01,Urea China FOB,195.4
2016-10-01,Urea China FOB,202.25
2016-11-01,Urea China FOB,227.0
2016-12-01,Urea China FOB,233.6
2017-01-01,Urea China FOB,246.0
2017-02-01,Urea China FOB,245.75
2017-03-01,Urea China FOB,231.0
2017-04-01,Urea China FOB,217.0
2017-05-01,Urea China FOB,214.25
2017-06-01,Urea China FOB,228.2
2017-07-01,Urea China FOB,228.5
2017-08-01,Urea China FOB,226.8
2017-09-01,Urea China FOB,257.5
2017-10-01,Urea China FOB,274.0
2017-11-01,Urea China FOB,273.6
2017-12-01,Urea China FOB,273.0
2018-01-01,Urea China FOB,293.25
2018-02-01,Urea China FOB,310.0
2018-03-01,Urea China FOB,304.0
2018-04-01,Urea China FOB,295.0
2018-05-01,Urea China FOB,297.0
2018-06-01,Urea China FOB,305.0
2018-07-01,Urea China FOB,294.25
2018-08-01,Urea China FOB,292.8
2018-09-01,Urea China FOB,309.75
2018-10-01,Urea China FOB,330.25
2018-11-01,Urea China FOB,319.0
2018-12-01,Urea China FOB,298.6666666666667
2019-01-01,Urea China FOB,286.0
2019-02-01,Urea China FOB,285.25
2019-03-01,Urea China FOB,289.25
2019-04-01,Urea China FOB,303.0
2019-05-01,Urea China FOB,294.0
2019-06-01,Urea China FOB,286.75
2019-07-01,Urea China FOB,281.5
2019-08-01,Urea China FOB,268.0
2019-09-01,Urea China FOB,263.0
2019-10-01,Urea China FOB,256.2
2019-11-01,Urea China FOB,241.75
2019-12-01,Urea China FOB,248.0
2020-01-01,Urea China FOB,251.2
2020-02-01,Urea China FOB,245.75
2020-03-01,Urea China FOB,258.75
2020-04-01,Urea China FOB,243.6
2020-05-01,Urea China FOB,237.0
2020-06-01,Urea China FOB,232.0
2020-07-01,Urea China FOB,232.2
2020-08-01,Urea China FOB,265.0
2020-09-01,Urea China FOB,262.75
2020-10-01,Urea China FOB,263.0
2020-11-01,Urea China FOB,277.5
2020-12-01,Urea China FOB,279.0
2021-01-01,Urea China FOB,306.0
2021-02-01,Urea China FOB,352.75
2021-03-01,Urea China FOB,348.0
2021-04-01,Urea China FOB,333.8
2021-05-01,Urea China FOB,356.0
2021-06-01,Urea China FOB,431.5
2021-07-01,Urea China FOB,466.4
2021-08-01,Urea China FOB,436.75
2021-09-01,Urea China FOB,452.8
2021-10-01,Urea China FOB,692.0
2021-11-01,Urea China FOB,740.0
2022-01-01,Urea China FOB,568.0
2022-02-01,Urea China FOB,564.0
2022-03-01,Urea China FOB,802.5
2022-04-01,Urea China FOB,770.0
2022-05-01,Urea China FOB,668.25
2022-06-01,Urea China FOB,580.0
2022-07-01,Urea China FOB,501.25
2022-08-01,Urea China FOB,493.75
2022-09-01,Urea China FOB,612.0
2022-10-01,Urea China FOB,620.0
2022-11-01,Urea China FOB,557.5
2022-12-01,Urea China FOB,494.0
2023-01-01,Urea China FOB,425.25
2023-02-01,Urea China FOB,387.75
2023-03-01,Urea China FOB,377.4
2023-04-01,Urea China FOB,340.0
2023-05-01,Urea China FOB,325.25
2023-06-01,Urea China FOB,292.4
2023-07-01,Urea China FOB,334.5
2023-08-01,Urea China FOB,377.2
2023-09-01,Urea China FOB,379.5
2023-10-01,Urea China FOB,370.25
2023-11-01,Urea China FOB,362.6
2023-12-01,Urea China FOB,352.0
2024-01-01,Urea China FOB,324.25
2024-02-01,Urea China FOB,318.5
2024-04-01,Urea China FOB,312.5
2025-05-01,Urea China FOB,354.75
2025-06-01,Urea China FOB,372.25
2025-07-01,Urea China FOB,403.6
2025-08-01,Urea China FOB,442.75
2025-09-01,Urea China FOB,420.75
2025-10-01,Urea China FOB,382.0
2022-06-01,Urea Southeast Asia CFR,607.5
2022-07-01,Urea Southeast Asia CFR,581.25
2022-08-01,Urea Southeast Asia CFR,557.0
2022-09-01,Urea Southeast Asia CFR,667.8
2022-10-01,Urea Southeast Asia CFR,642.5
2022-11-01,Urea Southeast Asia CFR,605.75
2022-12-01,Urea Southeast Asia CFR,526.25
2023-01-01,Urea Southeast Asia CFR,449.5
2023-02-01,Urea Southeast Asia CFR,405.75
2023-03-01,Urea Southeast Asia CFR,363.0
2023-04-01,Urea Southeast Asia CFR,367.75
2023-05-01,Urea Southeast Asia CFR,365.0
2023-06-01,Urea Southeast Asia CFR,317.8
2023-07-01,Urea Southeast Asia CFR,359.5
2023-08-01,Urea Southeast Asia CFR,411.2
2023-09-01,Urea Southeast Asia CFR,410.25
2023-10-01,Urea Southeast Asia CFR,410.75
2023-11-01,Urea Southeast Asia CFR,377.6
2023-12-01,Urea Southeast Asia CFR,368.0
2024-01-01,Urea Southeast Asia CFR,379.0
2024-02-01,Urea Southeast Asia CFR,414.0
2024-03-01,Urea Southeast Asia CFR,379.0
2024-04-01,Urea Southeast Asia CFR,346.75
2024-05-01,Urea Southeast Asia CFR,328.2
2024-06-01,Urea Southeast Asia CFR,369.0
2024-07-01,Urea Southeast Asia CFR,376.75
2024-08-01,Urea Southeast Asia CFR,401.6
2024-09-01,Urea Southeast Asia CFR,394.5
2024-10-01,Urea Southeast Asia CFR,406.2
2024-11-01,Urea Southeast Asia CFR,409.0
2024-12-01,Urea Southeast Asia CFR,414.3333333333333
2025-01-01,Urea Southeast Asia CFR,442.0
2025-02-01,Urea Southeast Asia CFR,468.5
2025-03-01,Urea Southeast Asia CFR,442.0
2025-04-01,Urea Southeast Asia CFR,422.25
2025-05-01,Urea Southeast Asia CFR,392.2
2025-06-01,Urea Southeast Asia CFR,411.0
2025-07-01,Urea Southeast Asia CFR,442.2
2025-08-01,Urea Southeast Asia CFR,459.25
2025-09-01,Urea Southeast Asia CFR,430.5
2025-10-01,Urea Southeast Asia CFR,408.0
2020-10-01,ZA Granular China FOB,122.8
2020-11-01,ZA Granular China FOB,127.25
2020-12-01,ZA Granular China FOB,128.75
2021-01-01,ZA Granular China FOB,132.0
2021-02-01,ZA Granular China FOB,158.5
2021-03-01,ZA Granular China FOB,174.0
2021-04-01,ZA Granular China FOB,170.4
2021-05-01,ZA Granular China FOB,168.0
2021-06-01,ZA Granular China FOB,209.25
2021-07-01,ZA Granular China FOB,240.8
2021-08-01,ZA Granular China FOB,264.25
2021-09-01,ZA Granular China FOB,243.6
2021-10-01,ZA Granular China FOB,330.0
2021-11-01,ZA Granular China FOB,411.25
2021-12-01,ZA Granular China FOB,415.0
2022-01-01,ZA Granular China FOB,335.0
2022-02-01,ZA Granular China FOB,265.0
2022-03-01,ZA Granular China FOB,338.0
2022-04-01,ZA Granular China FOB,355.0
2022-05-01,ZA Granular China FOB,325.75
2022-06-01,ZA Granular China FOB,274.0
2022-07-01,ZA Granular China FOB,247.75
2022-08-01,ZA Granular China FOB,230.75
2022-09-01,ZA Granular China FOB,260.6
2022-10-01,ZA Granular China FOB,258.75
2022-11-01,ZA Granular China FOB,245.25
2022-12-01,ZA Granular China FOB,238.25
2023-01-01,ZA Granular China FOB,211.0
2023-02-01,ZA Granular China FOB,205.75
2023-03-01,ZA Granular China FOB,189.8
2023-04-01,ZA Granular China FOB,157.75
2023-05-01,ZA Granular China FOB,155.25
2023-06-01,ZA Granular China FOB,124.6
2023-07-01,ZA Granular China FOB,163.0
2023-08-01,ZA Granular China FOB,183.6
2023-09-01,ZA Granular China FOB,189.25
2023-10-01,ZA Granular China FOB,194.75
2023-11-01,ZA Granular China FOB,159.6
2023-12-01,ZA Granular China FOB,140.33333333333334
2024-01-01,ZA Granular China FOB,149.75
2024-02-01,ZA Granular China FOB,160.0
2024-03-01,ZA Granular China FOB,144.25
2024-04-01,ZA Granular China FOB,137.0
2024-05-01,ZA Granular China FOB,146.2
2024-06-01,ZA Granular China FOB,173.0
2024-07-01,ZA Granular China FOB,165.5
2024-08-01,ZA Granular China FOB,160.4
2024-09-01,ZA Granular China FOB,164.0
2024-10-01,ZA Granular China FOB,164.0
2024-11-01,ZA Granular China FOB,146.0
2024-12-01,ZA Granular China FOB,143.0
2025-01-01,ZA Granular China FOB,148.6
2025-02-01,ZA Granular China FOB,159.25
2025-03-01,ZA Granular China FOB,155.5
2025-04-01,ZA Granular China FOB,162.75
2025-05-01,ZA Granular China FOB,168.8
2025-06-01,ZA Granular China FOB,181.0
2025-07-01,ZA Granular China FOB,192.0
2025-08-01,ZA Granular China FOB,175.25
2025-09-01,ZA Granular China FOB,160.25
2025-10-01,ZA Granular China FOB,162.4
2013-01-01,ZA Standard Southeast Asia CFR,222.4
2013-02-01,ZA Standard Southeast Asia CFR,222.25
2013-03-01,ZA Standard Southeast Asia CFR,216.5
2013-04-01,ZA Standard Southeast Asia CFR,190.25
2013-05-01,ZA Standard Southeast Asia CFR,176.0
2013-06-01,ZA Standard Southeast Asia CFR,150.25
2013-07-01,ZA Standard Southeast Asia CFR,138.5
2013-08-01,ZA Standard Southeast Asia CFR,135.6
2013-09-01,ZA Standard Southeast Asia CFR,134.0
2013-10-01,ZA Standard Southeast Asia CFR,125.0
2013-11-01,ZA Standard Southeast Asia CFR,141.25
2013-12-01,ZA Standard Southeast Asia CFR,151.5
2014-01-01,ZA Standard Southeast Asia CFR,152.0
2014-02-01,ZA Standard Southeast Asia CFR,163.0
2014-03-01,ZA Standard Southeast Asia CFR,155.0
2014-04-01,ZA Standard Southeast Asia CFR,145.25
2014-05-01,ZA Standard Southeast Asia CFR,144.6
2014-06-01,ZA Standard Southeast Asia CFR,140.0
2014-07-01,ZA Standard Southeast Asia CFR,139.2
2014-08-01,ZA Standard Southeast Asia CFR,141.75
2014-09-01,ZA Standard Southeast Asia CFR,156.0
2014-10-01,ZA Standard Southeast Asia CFR,153.6
2014-11-01,ZA Standard Southeast Asia CFR,153.75
2014-12-01,ZA Standard Southeast Asia CFR,151.0
2015-01-01,ZA Standard Southeast Asia CFR,150.0
2015-02-01,ZA Standard Southeast Asia CFR,150.0
2015-03-01,ZA Standard Southeast Asia CFR,147.0
2015-04-01,ZA Standard Southeast Asia CFR,151.8
2015-05-01,ZA Standard Southeast Asia CFR,158.75
2015-06-01,ZA Standard Southeast Asia CFR,154.5
2015-07-01,ZA Standard Southeast Asia CFR,150.2
2015-08-01,ZA Standard Southeast Asia CFR,150.25
2015-09-01,ZA Standard Southeast Asia CFR,149.5
2015-10-01,ZA Standard Southeast Asia CFR,145.0
2015-11-01,ZA Standard Southeast Asia CFR,138.0
2015-12-01,ZA Standard Southeast Asia CFR,138.0
2016-01-01,ZA Standard Southeast Asia CFR,121.75
2016-02-01,ZA Standard Southeast Asia CFR,118.0
2016-03-01,ZA Standard Southeast Asia CFR,122.0
2016-04-01,ZA Standard Southeast Asia CFR,123.0
2016-05-01,ZA Standard Southeast Asia CFR,124.25
2016-06-01,ZA Standard Southeast Asia CFR,123.6
2016-07-01,ZA Standard Southeast Asia CFR,121.75
2016-08-01,ZA Standard Southeast Asia CFR,123.0
2016-09-01,ZA Standard Southeast Asia CFR,123.0
2016-10-01,ZA Standard Southeast Asia CFR,115.75
2016-11-01,ZA Standard Southeast Asia CFR,113.5
2016-12-01,ZA Standard Southeast Asia CFR,117.0
2017-01-01,ZA Standard Southeast Asia CFR,125.5
2017-02-01,ZA Standard Southeast Asia CFR,128.0
2017-03-01,ZA Standard Southeast Asia CFR,133.0
2017-04-01,ZA Standard Southeast Asia CFR,128.0
2017-05-01,ZA Standard Southeast Asia CFR,124.75
2017-06-01,ZA Standard Southeast Asia CFR,118.0
2017-07-01,ZA Standard Southeast Asia CFR,118.5
2017-08-01,ZA Standard Southeast Asia CFR,120.0
2017-09-01,ZA Standard Southeast Asia CFR,127.75
2017-10-01,ZA Standard Southeast Asia CFR,131.25
2017-11-01,ZA Standard Southeast Asia CFR,132.2
2017-12-01,ZA Standard Southeast Asia CFR,133.0
2018-01-01,ZA Standard Southeast Asia CFR,133.0
2018-02-01,ZA Standard Southeast Asia CFR,133.0
2018-03-01,ZA Standard Southeast Asia CFR,133.0
2018-04-01,ZA Standard Southeast Asia CFR,130.5
2018-05-01,ZA Standard Southeast Asia CFR,133.0
2018-06-01,ZA Standard Southeast Asia CFR,133.0
2018-07-01,ZA Standard Southeast Asia CFR,133.0
2018-08-01,ZA Standard Southeast Asia CFR,133.0
2018-09-01,ZA Standard Southeast Asia CFR,133.0
2018-10-01,ZA Standard Southeast Asia CFR,133.0
2018-11-01,ZA Standard Southeast Asia CFR,133.0
2018-12-01,ZA Standard Southeast Asia CFR,133.0
2019-01-01,ZA Standard Southeast Asia CFR,133.0
2019-02-01,ZA Standard Southeast Asia CFR,133.0
2019-03-01,ZA Standard Southeast Asia CFR,133.0
2019-04-01,ZA Standard Southeast Asia CFR,133.0
2019-05-01,ZA Standard Southeast Asia CFR,133.0
2019-06-01,ZA Standard Southeast Asia CFR,133.0
2019-07-01,ZA Standard Southeast Asia CFR,133.0
2019-08-01,ZA Standard Southeast Asia CFR,133.0
2019-09-01,ZA Standard Southeast Asia CFR,133.0
2019-10-01,ZA Standard Southeast Asia CFR,133.0
2019-11-01,ZA Standard Southeast Asia CFR,123.0
2019-12-01,ZA Standard Southeast Asia CFR,114.66666666666669
2020-01-01,ZA Standard Southeast Asia CFR,108.0
2020-02-01,ZA Standard Southeast Asia CFR,109.25
2020-03-01,ZA Standard Southeast Asia CFR,111.0
2020-04-01,ZA Standard Southeast Asia CFR,111.0
2020-05-01,ZA Standard Southeast Asia CFR,109.75
2020-06-01,ZA Standard Southeast Asia CFR,106.0
2020-07-01,ZA Standard Southeast Asia CFR,107.6
2020-08-01,ZA Standard Southeast Asia CFR,114.0
2020-09-01,ZA Standard Southeast Asia CFR,118.0
2020-10-01,ZA Standard Southeast Asia CFR,119.2
2020-11-01,ZA Standard Southeast Asia CFR,122.25
2020-12-01,ZA Standard Southeast Asia CFR,128.25
2021-01-01,ZA Standard Southeast Asia CFR,134.75
2021-02-01,ZA Standard Southeast Asia CFR,155.5
2021-03-01,ZA Standard Southeast Asia CFR,192.5
2021-04-01,ZA Standard Southeast Asia CFR,193.0
2021-05-01,ZA Standard Southeast Asia CFR,193.0
2021-06-01,ZA Standard Southeast Asia CFR,198.25
2021-07-01,ZA Standard Southeast Asia CFR,200.0
2021-08-01,ZA Standard Southeast Asia CFR,231.5
2021-09-01,ZA Standard Southeast Asia CFR,263.0
2021-10-01,ZA Standard Southeast Asia CFR,263.0
2021-11-01,ZA Standard Southeast Asia CFR,361.5
2021-12-01,ZA Standard Southeast Asia CFR,460.0
2022-01-01,ZA Standard Southeast Asia CFR,419.0
2022-02-01,ZA Standard Southeast Asia CFR,299.0
2022-03-01,ZA Standard Southeast Asia CFR,340.0
2022-04-01,ZA Standard Southeast Asia CFR,371.0
2022-05-01,ZA Standard Southeast Asia CFR,352.75
2022-06-01,ZA Standard Southeast Asia CFR,285.8
2022-07-01,ZA Standard Southeast Asia CFR,250.75
2022-08-01,ZA Standard Southeast Asia CFR,238.25
2022-09-01,ZA Standard Southeast Asia CFR,252.6
2022-10-01,ZA Standard Southeast Asia CFR,253.5
2022-11-01,ZA Standard Southeast Asia CFR,232.5
2022-12-01,ZA Standard Southeast Asia CFR,210.5
2023-01-01,ZA Standard Southeast Asia CFR,196.5
2023-02-01,ZA Standard Southeast Asia CFR,183.0
2023-03-01,ZA Standard Southeast Asia CFR,180.4
2023-04-01,ZA Standard Southeast Asia CFR,150.75
2023-05-01,ZA Standard Southeast Asia CFR,146.25
2023-06-01,ZA Standard Southeast Asia CFR,123.4
2023-07-01,ZA Standard Southeast Asia CFR,145.5
2023-08-01,ZA Standard Southeast Asia CFR,180.0
2023-09-01,ZA Standard Southeast Asia CFR,181.25
2023-10-01,ZA Standard Southeast Asia CFR,188.5
2023-11-01,ZA Standard Southeast Asia CFR,154.0
2023-12-01,ZA Standard Southeast Asia CFR,133.0
2024-01-01,ZA Standard Southeast Asia CFR,151.25
2024-02-01,ZA Standard Southeast Asia CFR,163.6
2024-03-01,ZA Standard Southeast Asia CFR,151.25
2024-04-01,ZA Standard Southeast Asia CFR,140.0
2024-05-01,ZA Standard Southeast Asia CFR,149.0
2024-06-01,ZA Standard Southeast Asia CFR,164.75
2024-07-01,ZA Standard Southeast Asia CFR,167.75
2024-08-01,ZA Standard Southeast Asia CFR,166.2
2024-09-01,ZA Standard Southeast Asia CFR,172.25
2024-10-01,ZA Standard Southeast Asia CFR,170.8
2024-11-01,ZA Standard Southeast Asia CFR,159.75
2024-12-01,ZA Standard Southeast Asia CFR,159.33333333333334
2025-01-01,ZA Standard Southeast Asia CFR,170.0
2025-02-01,ZA Standard Southeast Asia CFR,171.5
2025-03-01,ZA Standard Southeast Asia CFR,162.5
2025-04-01,ZA Standard Southeast Asia CFR,165.0
2025-05-01,ZA Standard Southeast Asia CFR,173.4
2025-06-01,ZA Standard Southeast Asia CFR,184.25
2025-07-01,ZA Standard Southeast Asia CFR,204.0
2025-08-01,ZA Standard Southeast Asia CFR,192.5
2025-09-01,ZA Standard Southeast Asia CFR,166.5
2025-10-01,ZA Standard Southeast Asia CFR,172.8
2016-01-01,Ammonia Southeast Asia FOB,340.0
2016-02-01,Ammonia Southeast Asia FOB,327.5
2016-03-01,Ammonia Southeast Asia FOB,335.8
2016-04-01,Ammonia Southeast Asia FOB,347.5
2016-05-01,Ammonia Southeast Asia FOB,350.0
2016-06-01,Ammonia Southeast Asia FOB,334.0
2016-07-01,Ammonia Southeast Asia FOB,320.0
2016-08-01,Ammonia Southeast Asia FOB,287.0
2016-09-01,Ammonia Southeast Asia FOB,248.6
2016-10-01,Ammonia Southeast Asia FOB,215.0
2016-11-01,Ammonia Southeast Asia FOB,202.5
2016-12-01,Ammonia Southeast Asia FOB,219.0
2017-01-01,Ammonia Southeast Asia FOB,230.0
2017-02-01,Ammonia Southeast Asia FOB,285.0
2017-03-01,Ammonia Southeast Asia FOB,331.6
2017-04-01,Ammonia Southeast Asia FOB,370.5
2017-05-01,Ammonia Southeast Asia FOB,328.0
2017-06-01,Ammonia Southeast Asia FOB,247.0
2017-07-01,Ammonia Southeast Asia FOB,214.5
2017-08-01,Ammonia Southeast Asia FOB,220.6
2017-09-01,Ammonia Southeast Asia FOB,240.0
2017-10-01,Ammonia Southeast Asia FOB,252.5
2017-11-01,Ammonia Southeast Asia FOB,318.0
2017-12-01,Ammonia Southeast Asia FOB,340.0
2018-01-01,Ammonia Southeast Asia FOB,340.0
2018-02-01,Ammonia Southeast Asia FOB,318.75
2018-03-01,Ammonia Southeast Asia FOB,276.2
2018-04-01,Ammonia Southeast Asia FOB,275.0
2018-05-01,Ammonia Southeast Asia FOB,300.0
2018-06-01,Ammonia Southeast Asia FOB,314.5
2018-07-01,Ammonia Southeast Asia FOB,333.25
2018-08-01,Ammonia Southeast Asia FOB,348.8
2018-09-01,Ammonia Southeast Asia FOB,353.0
2018-10-01,Ammonia Southeast Asia FOB,352.0
2018-11-01,Ammonia Southeast Asia FOB,345.0
2018-12-01,Ammonia Southeast Asia FOB,323.3333333333333
2019-01-01,Ammonia Southeast Asia FOB,295.0
2019-02-01,Ammonia Southeast Asia FOB,266.25
2019-03-01,Ammonia Southeast Asia FOB,264.75
2019-04-01,Ammonia Southeast Asia FOB,267.5
2019-05-01,Ammonia Southeast Asia FOB,246.0
2019-06-01,Ammonia Southeast Asia FOB,247.5
2019-07-01,Ammonia Southeast Asia FOB,233.75
2019-08-01,Ammonia Southeast Asia FOB,237.6
2019-09-01,Ammonia Southeast Asia FOB,266.0
2019-10-01,Ammonia Southeast Asia FOB,262.4
2019-11-01,Ammonia Southeast Asia FOB,261.0
2019-12-01,Ammonia Southeast Asia FOB,256.0
2020-01-01,Ammonia Southeast Asia FOB,261.4
2020-02-01,Ammonia Southeast Asia FOB,264.5
2020-03-01,Ammonia Southeast Asia FOB,256.5
2020-04-01,Ammonia Southeast Asia FOB,226.2
2020-05-01,Ammonia Southeast Asia FOB,184.0
2020-06-01,Ammonia Southeast Asia FOB,202.75
2020-07-01,Ammonia Southeast Asia FOB,220.6
2020-08-01,Ammonia Southeast Asia FOB,243.25
2020-09-01,Ammonia Southeast Asia FOB,260.5
2020-10-01,Ammonia Southeast Asia FOB,271.0
2020-11-01,Ammonia Southeast Asia FOB,260.75
2020-12-01,Ammonia Southeast Asia FOB,258.0
2021-01-01,Ammonia Southeast Asia FOB,281.0
2021-02-01,Ammonia Southeast Asia FOB,341.25
2021-03-01,Ammonia Southeast Asia FOB,412.5
2021-04-01,Ammonia Southeast Asia FOB,466.2
2021-05-01,Ammonia Southeast Asia FOB,554.5
2021-06-01,Ammonia Southeast Asia FOB,607.75
2021-07-01,Ammonia Southeast Asia FOB,620.2
2021-08-01,Ammonia Southeast Asia FOB,608.0
2021-09-01,Ammonia Southeast Asia FOB,586.0
2021-10-01,Ammonia Southeast Asia FOB,582.5
2021-11-01,Ammonia Southeast Asia FOB,734.0
2021-12-01,Ammonia Southeast Asia FOB,900.75
2022-01-01,Ammonia Southeast Asia FOB,956.75
2022-02-01,Ammonia Southeast Asia FOB,890.25
2022-03-01,Ammonia Southeast Asia FOB,1025.0
2022-04-01,Ammonia Southeast Asia FOB,1030.0
2022-05-01,Ammonia Southeast Asia FOB,952.5
2022-06-01,Ammonia Southeast Asia FOB,898.2
2022-07-01,Ammonia Southeast Asia FOB,850.75
2022-08-01,Ammonia Southeast Asia FOB,859.75
2022-09-01,Ammonia Southeast Asia FOB,889.8
2022-10-01,Ammonia Southeast Asia FOB,858.75
2022-11-01,Ammonia Southeast Asia FOB,832.0
2022-12-01,Ammonia Southeast Asia FOB,810.75
2023-01-01,Ammonia Southeast Asia FOB,729.0
2023-02-01,Ammonia Southeast Asia FOB,668.25
2023-03-01,Ammonia Southeast Asia FOB,478.2
2023-04-01,Ammonia Southeast Asia FOB,285.0
2023-05-01,Ammonia Southeast Asia FOB,258.25
2023-06-01,Ammonia Southeast Asia FOB,299.2
2023-07-01,Ammonia Southeast Asia FOB,305.0
2023-08-01,Ammonia Southeast Asia FOB,313.0
2023-09-01,Ammonia Southeast Asia FOB,467.5
2023-10-01,Ammonia Southeast Asia FOB,575.0
2023-11-01,Ammonia Southeast Asia FOB,547.0
2023-12-01,Ammonia Southeast Asia FOB,470.0
2024-01-01,Ammonia Southeast Asia FOB,343.25
2024-02-01,Ammonia Southeast Asia FOB,290.0
2024-03-01,Ammonia Southeast Asia FOB,300.0
2024-04-01,Ammonia Southeast Asia FOB,310.0
2024-05-01,Ammonia Southeast Asia FOB,375.0
2024-06-01,Ammonia Southeast Asia FOB,385.0
2024-07-01,Ammonia Southeast Asia FOB,385.0
2024-08-01,Ammonia Southeast Asia FOB,370.0
2024-09-01,Ammonia Southeast Asia FOB,380.75
2024-10-01,Ammonia Southeast Asia FOB,420.6
2024-11-01,Ammonia Southeast Asia FOB,406.25
2024-12-01,Ammonia Southeast Asia FOB,391.6666666666667
2025-01-01,Ammonia Southeast Asia FOB,382.0
2025-02-01,Ammonia Southeast Asia FOB,342.5
2025-03-01,Ammonia Southeast Asia FOB,311.25
2025-04-01,Ammonia Southeast Asia FOB,300.0
2025-05-01,Ammonia Southeast Asia FOB,296.0
2025-06-01,Ammonia Southeast Asia FOB,303.75
2025-07-01,Ammonia Southeast Asia FOB,316.0
2025-08-01,Ammonia Southeast Asia FOB,325.0
2025-09-01,Ammonia Southeast Asia FOB,353.75
2025-10-01,Ammonia Southeast Asia FOB,402.2
2010-01-01,Ammonia Southeast Asia CFR,347.5
2010-02-01,Ammonia Southeast Asia CFR,397.0
2010-03-01,Ammonia Southeast Asia CFR,428.0
2010-04-01,Ammonia Southeast Asia CFR,424.4
2010-05-01,Ammonia Southeast Asia CFR,406.25
2010-06-01,Ammonia Southeast Asia CFR,391.5
2010-07-01,Ammonia Southeast Asia CFR,363.6
2010-08-01,Ammonia Southeast Asia CFR,398.0
2010-09-01,Ammonia Southeast Asia CFR,439.8
2010-10-01,Ammonia Southeast Asia CFR,473.0
2010-11-01,Ammonia Southeast Asia CFR,459.0
2010-12-01,Ammonia Southeast Asia CFR,445.0
2011-01-01,Ammonia Southeast Asia CFR,471.25
2011-02-01,Ammonia Southeast Asia CFR,507.25
2011-03-01,Ammonia Southeast Asia CFR,540.8
2011-04-01,Ammonia Southeast Asia CFR,553.0
2011-05-01,Ammonia Southeast Asia CFR,555.0
2011-06-01,Ammonia Southeast Asia CFR,579.4
2011-07-01,Ammonia Southeast Asia CFR,593.0
2011-08-01,Ammonia Southeast Asia CFR,596.5
2011-09-01,Ammonia Southeast Asia CFR,636.0
2011-10-01,Ammonia Southeast Asia CFR,650.0
2011-11-01,Ammonia Southeast Asia CFR,660.0
2011-12-01,Ammonia Southeast Asia CFR,625.0
2012-01-01,Ammonia Southeast Asia CFR,547.5
2012-02-01,Ammonia Southeast Asia CFR,426.25
2012-03-01,Ammonia Southeast Asia CFR,472.0
2012-04-01,Ammonia Southeast Asia CFR,565.0
2012-05-01,Ammonia Southeast Asia CFR,597.0
2012-06-01,Ammonia Southeast Asia CFR,676.25
2012-07-01,Ammonia Southeast Asia CFR,710.0
2012-08-01,Ammonia Southeast Asia CFR,744.2
2012-09-01,Ammonia Southeast Asia CFR,765.0
2012-10-01,Ammonia Southeast Asia CFR,768.0
2012-11-01,Ammonia Southeast Asia CFR,769.0
2012-12-01,Ammonia Southeast Asia CFR,735.5
2013-01-01,Ammonia Southeast Asia CFR,713.6
2013-02-01,Ammonia Southeast Asia CFR,688.75
2013-03-01,Ammonia Southeast Asia CFR,641.0
2013-04-01,Ammonia Southeast Asia CFR,619.25
2013-05-01,Ammonia Southeast Asia CFR,618.6
2013-06-01,Ammonia Southeast Asia CFR,598.25
2013-07-01,Ammonia Southeast Asia CFR,565.0
2013-08-01,Ammonia Southeast Asia CFR,498.2
2013-09-01,Ammonia Southeast Asia CFR,494.25
2013-10-01,Ammonia Southeast Asia CFR,549.0
2013-11-01,Ammonia Southeast Asia CFR,511.25
2013-12-01,Ammonia Southeast Asia CFR,529.5
2014-01-01,Ammonia Southeast Asia CFR,531.4
2014-02-01,Ammonia Southeast Asia CFR,519.0
2014-03-01,Ammonia Southeast Asia CFR,531.5
2014-04-01,Ammonia Southeast Asia CFR,567.5
2014-05-01,Ammonia Southeast Asia CFR,554.0
2014-06-01,Ammonia Southeast Asia CFR,545.0
2014-07-01,Ammonia Southeast Asia CFR,552.2
2014-08-01,Ammonia Southeast Asia CFR,570.75
2014-09-01,Ammonia Southeast Asia CFR,588.75
2014-10-01,Ammonia Southeast Asia CFR,637.0
2014-11-01,Ammonia Southeast Asia CFR,650.0
2014-12-01,Ammonia Southeast Asia CFR,641.25
2015-01-01,Ammonia Southeast Asia CFR,564.6
2015-02-01,Ammonia Southeast Asia CFR,508.75
2015-03-01,Ammonia Southeast Asia CFR,495.0
2015-04-01,Ammonia Southeast Asia CFR,463.0
2015-05-01,Ammonia Southeast Asia CFR,448.0
2015-06-01,Ammonia Southeast Asia CFR,442.5
2015-07-01,Ammonia Southeast Asia CFR,448.6
2015-08-01,Ammonia Southeast Asia CFR,439.25
2015-09-01,Ammonia Southeast Asia CFR,464.0
2015-10-01,Ammonia Southeast Asia CFR,461.6
2015-11-01,Ammonia Southeast Asia CFR,455.0
2015-12-01,Ammonia Southeast Asia CFR,434.0
2016-01-01,Ammonia Southeast Asia CFR,388.75
2016-02-01,Ammonia Southeast Asia CFR,371.75
2016-03-01,Ammonia Southeast Asia CFR,383.0
2016-04-01,Ammonia Southeast Asia CFR,388.25
2016-05-01,Ammonia Southeast Asia CFR,390.0
2016-06-01,Ammonia Southeast Asia CFR,370.6
2016-07-01,Ammonia Southeast Asia CFR,358.5
2016-08-01,Ammonia Southeast Asia CFR,323.75
2016-09-01,Ammonia Southeast Asia CFR,283.0
2016-10-01,Ammonia Southeast Asia CFR,250.0
2016-11-01,Ammonia Southeast Asia CFR,242.5
2016-12-01,Ammonia Southeast Asia CFR,259.0
2017-01-01,Ammonia Southeast Asia CFR,267.5
2017-02-01,Ammonia Southeast Asia CFR,313.75
2017-03-01,Ammonia Southeast Asia CFR,364.0
2017-04-01,Ammonia Southeast Asia CFR,400.5
2017-05-01,Ammonia Southeast Asia CFR,357.5
2017-06-01,Ammonia Southeast Asia CFR,279.0
2017-07-01,Ammonia Southeast Asia CFR,236.5
2017-08-01,Ammonia Southeast Asia CFR,246.6
2017-09-01,Ammonia Southeast Asia CFR,267.5
2017-10-01,Ammonia Southeast Asia CFR,282.5
2017-11-01,Ammonia Southeast Asia CFR,352.0
2017-12-01,Ammonia Southeast Asia CFR,370.0
2018-01-01,Ammonia Southeast Asia CFR,370.0
2018-02-01,Ammonia Southeast Asia CFR,348.75
2018-03-01,Ammonia Southeast Asia CFR,311.6
2018-04-01,Ammonia Southeast Asia CFR,304.75
2018-05-01,Ammonia Southeast Asia CFR,330.2
2018-06-01,Ammonia Southeast Asia CFR,343.0
2018-07-01,Ammonia Southeast Asia CFR,362.5
2018-08-01,Ammonia Southeast Asia CFR,378.8
2018-09-01,Ammonia Southeast Asia CFR,385.0
2018-10-01,Ammonia Southeast Asia CFR,388.0
2018-11-01,Ammonia Southeast Asia CFR,381.0
2018-12-01,Ammonia Southeast Asia CFR,356.6666666666667
2019-01-01,Ammonia Southeast Asia CFR,330.0
2019-02-01,Ammonia Southeast Asia CFR,296.25
2019-03-01,Ammonia Southeast Asia CFR,292.5
2019-04-01,Ammonia Southeast Asia CFR,295.0
2019-05-01,Ammonia Southeast Asia CFR,274.8
2019-06-01,Ammonia Southeast Asia CFR,276.75
2019-07-01,Ammonia Southeast Asia CFR,265.75
2019-08-01,Ammonia Southeast Asia CFR,267.6
2019-09-01,Ammonia Southeast Asia CFR,295.5
2019-10-01,Ammonia Southeast Asia CFR,292.0
2019-11-01,Ammonia Southeast Asia CFR,290.75
2019-12-01,Ammonia Southeast Asia CFR,286.0
2020-01-01,Ammonia Southeast Asia CFR,294.4
2020-02-01,Ammonia Southeast Asia CFR,297.0
2020-03-01,Ammonia Southeast Asia CFR,289.25
2020-04-01,Ammonia Southeast Asia CFR,259.8
2020-05-01,Ammonia Southeast Asia CFR,218.25
2020-06-01,Ammonia Southeast Asia CFR,241.25
2020-07-01,Ammonia Southeast Asia CFR,258.0
2020-08-01,Ammonia Southeast Asia CFR,280.0
2020-09-01,Ammonia Southeast Asia CFR,300.0
2020-10-01,Ammonia Southeast Asia CFR,308.0
2020-11-01,Ammonia Southeast Asia CFR,292.0
2020-12-01,Ammonia Southeast Asia CFR,293.0
2021-01-01,Ammonia Southeast Asia CFR,312.25
2021-02-01,Ammonia Southeast Asia CFR,384.75
2021-03-01,Ammonia Southeast Asia CFR,465.75
2021-04-01,Ammonia Southeast Asia CFR,521.2
2021-05-01,Ammonia Southeast Asia CFR,594.0
2021-06-01,Ammonia Southeast Asia CFR,647.75
2021-07-01,Ammonia Southeast Asia CFR,660.8
2021-08-01,Ammonia Southeast Asia CFR,648.25
2021-09-01,Ammonia Southeast Asia CFR,626.0
2021-10-01,Ammonia Southeast Asia CFR,615.75
2021-11-01,Ammonia Southeast Asia CFR,759.0
2021-12-01,Ammonia Southeast Asia CFR,925.75
2022-01-01,Ammonia Southeast Asia CFR,981.75
2022-02-01,Ammonia Southeast Asia CFR,915.25
2022-03-01,Ammonia Southeast Asia CFR,1055.0
2022-04-01,Ammonia Southeast Asia CFR,1060.0
2022-05-01,Ammonia Southeast Asia CFR,987.5
2022-06-01,Ammonia Southeast Asia CFR,930.2
2022-07-01,Ammonia Southeast Asia CFR,880.75
2022-08-01,Ammonia Southeast Asia CFR,889.75
2022-09-01,Ammonia Southeast Asia CFR,919.8
2022-10-01,Ammonia Southeast Asia CFR,888.75
2022-11-01,Ammonia Southeast Asia CFR,862.0
2022-12-01,Ammonia Southeast Asia CFR,840.75
2023-01-01,Ammonia Southeast Asia CFR,759.0
2023-02-01,Ammonia Southeast Asia CFR,698.25
2023-03-01,Ammonia Southeast Asia CFR,508.2
2023-04-01,Ammonia Southeast Asia CFR,315.0
2023-05-01,Ammonia Southeast Asia CFR,288.25
2023-06-01,Ammonia Southeast Asia CFR,329.2
2023-07-01,Ammonia Southeast Asia CFR,339.0
2023-08-01,Ammonia Southeast Asia CFR,343.0
2023-09-01,Ammonia Southeast Asia CFR,497.5
2023-10-01,Ammonia Southeast Asia CFR,605.0
2023-11-01,Ammonia Southeast Asia CFR,574.6
2023-12-01,Ammonia Southeast Asia CFR,500.0
2024-01-01,Ammonia Southeast Asia CFR,363.75
2024-02-01,Ammonia Southeast Asia CFR,320.0
2024-03-01,Ammonia Southeast Asia CFR,329.0
2024-04-01,Ammonia Southeast Asia CFR,338.0
2024-05-01,Ammonia Southeast Asia CFR,405.0
2024-06-01,Ammonia Southeast Asia CFR,415.0
2024-07-01,Ammonia Southeast Asia CFR,415.0
2024-08-01,Ammonia Southeast Asia CFR,400.0
2024-09-01,Ammonia Southeast Asia CFR,410.75
2024-10-01,Ammonia Southeast Asia CFR,461.0
2024-11-01,Ammonia Southeast Asia CFR,439.5
2024-12-01,Ammonia Southeast Asia CFR,423.3333333333333
2025-01-01,Ammonia Southeast Asia CFR,412.0
2025-02-01,Ammonia Southeast Asia CFR,372.5
2025-03-01,Ammonia Southeast Asia CFR,341.25
2025-04-01,Ammonia Southeast Asia CFR,330.0
2025-05-01,Ammonia Southeast Asia CFR,326.0
2025-06-01,Ammonia Southeast Asia CFR,333.75
2025-07-01,Ammonia Southeast Asia CFR,346.0
2025-08-01,Ammonia Southeast Asia CFR,355.0
2025-09-01,Ammonia Southeast Asia CFR,383.75
2025-10-01,Ammonia Southeast Asia CFR,432.2
2010-01-01,PA India CFR,596.5
2010-02-01,PA India CFR,639.0
2010-03-01,PA India CFR,680.0
2010-04-01,PA India CFR,732.4
2010-05-01,PA India CFR,778.0
2010-06-01,PA India CFR,778.5
2010-07-01,PA India CFR,780.0
2010-08-01,PA India CFR,780.0
2010-09-01,PA India CFR,780.0
2010-10-01,PA India CFR,780.0
2010-11-01,PA India CFR,780.0
2010-12-01,PA India CFR,780.0
2011-01-01,PA India CFR,817.5
2011-02-01,PA India CFR,830.0
2011-03-01,PA India CFR,932.0
2011-04-01,PA India CFR,980.0
2011-05-01,PA India CFR,980.0
2011-06-01,PA India CFR,980.0
2011-07-01,PA India CFR,1050.0
2011-08-01,PA India CFR,1050.0
2011-09-01,PA India CFR,1050.0
2011-10-01,PA India CFR,1080.0
2011-11-01,PA India CFR,1080.0
2011-12-01,PA India CFR,1080.0
2012-01-01,PA India CFR,1080.0
2012-02-01,PA India CFR,960.0
2012-03-01,PA India CFR,960.0
2012-04-01,PA India CFR,946.25
2012-05-01,PA India CFR,890.2
2012-06-01,PA India CFR,868.0
2012-07-01,PA India CFR,876.5
2012-08-01,PA India CFR,885.0
2012-09-01,PA India CFR,885.0
2012-10-01,PA India CFR,862.5
2012-11-01,PA India CFR,855.0
2012-12-01,PA India CFR,855.0
2013-01-01,PA India CFR,787.0
2013-02-01,PA India CFR,770.0
2013-03-01,PA India CFR,770.0
2013-04-01,PA India CFR,770.0
2013-05-01,PA India CFR,750.0
2013-06-01,PA India CFR,750.0
2013-07-01,PA India CFR,723.75
2013-08-01,PA India CFR,715.0
2013-09-01,PA India CFR,715.0
2013-10-01,PA India CFR,609.0
2013-11-01,PA India CFR,609.0
2013-12-01,PA India CFR,609.0
2014-01-01,PA India CFR,609.0
2014-02-01,PA India CFR,662.25
2014-03-01,PA India CFR,680.0
2014-04-01,PA India CFR,688.75
2014-05-01,PA India CFR,715.0
2014-06-01,PA India CFR,715.0
2014-07-01,PA India CFR,715.0
2014-08-01,PA India CFR,752.5
2014-09-01,PA India CFR,765.0
2014-10-01,PA India CFR,765.0
2014-11-01,PA India CFR,765.0
2014-12-01,PA India CFR,765.0
2015-01-01,PA India CFR,765.0
2015-02-01,PA India CFR,765.0
2015-03-01,PA India CFR,775.0
2015-04-01,PA India CFR,805.0
2015-05-01,PA India CFR,805.0
2015-06-01,PA India CFR,806.25
2015-07-01,PA India CFR,810.0
2015-08-01,PA India CFR,810.0
2015-09-01,PA India CFR,810.0
2015-10-01,PA India CFR,810.0
2015-11-01,PA India CFR,810.0
2015-12-01,PA India CFR,810.0
2016-01-01,PA India CFR,715.0
2016-02-01,PA India CFR,715.0
2016-03-01,PA India CFR,715.0
2016-04-01,PA India CFR,605.0
2016-05-01,PA India CFR,605.0
2016-06-01,PA India CFR,605.0
2016-07-01,PA India CFR,605.0
2016-08-01,PA India CFR,605.0
2016-09-01,PA India CFR,607.4
2016-10-01,PA India CFR,580.0
2016-11-01,PA India CFR,580.0
2016-12-01,PA India CFR,580.0
2017-01-01,PA India CFR,548.0
2017-02-01,PA India CFR,548.0
2017-03-01,PA India CFR,548.0
2017-04-01,PA India CFR,580.0
2017-05-01,PA India CFR,580.25
2017-06-01,PA India CFR,581.0
2017-07-01,PA India CFR,567.0
2017-08-01,PA India CFR,570.0
2017-09-01,PA India CFR,570.0
2017-10-01,PA India CFR,570.0
2017-11-01,PA India CFR,570.0
2017-12-01,PA India CFR,570.0
2018-01-01,PA India CFR,678.0
2018-02-01,PA India CFR,678.0
2018-03-01,PA India CFR,678.0
2018-04-01,PA India CFR,730.0
2018-05-01,PA India CFR,730.0
2018-06-01,PA India CFR,730.0
2018-07-01,PA India CFR,758.0
2018-08-01,PA India CFR,758.0
2018-09-01,PA India CFR,758.0
2018-10-01,PA India CFR,763.0
2018-11-01,PA India CFR,768.0
2018-12-01,PA India CFR,768.0
2019-01-01,PA India CFR,750.0
2019-02-01,PA India CFR,750.0
2019-03-01,PA India CFR,750.0
2019-04-01,PA India CFR,728.0
2019-05-01,PA India CFR,728.0
2019-06-01,PA India CFR,728.0
2019-07-01,PA India CFR,655.0
2019-08-01,PA India CFR,655.0
2019-09-01,PA India CFR,655.0
2019-10-01,PA India CFR,625.0
2019-11-01,PA India CFR,625.0
2019-12-01,PA India CFR,625.0
2020-01-01,PA India CFR,590.0
2020-02-01,PA India CFR,590.0
2020-03-01,PA India CFR,590.0
2020-04-01,PA India CFR,607.0
2020-05-01,PA India CFR,607.0
2020-06-01,PA India CFR,607.0
2020-07-01,PA India CFR,625.0
2020-08-01,PA India CFR,625.0
2020-09-01,PA India CFR,625.0
2020-10-01,PA India CFR,689.0
2020-11-01,PA India CFR,689.0
2020-12-01,PA India CFR,689.0
2021-01-01,PA India CFR,795.0
2021-02-01,PA India CFR,795.0
2021-03-01,PA India CFR,795.0
2021-04-01,PA India CFR,998.0
2021-05-01,PA India CFR,998.0
2021-06-01,PA India CFR,998.0
2021-07-01,PA India CFR,1160.0
2021-08-01,PA India CFR,1160.0
2021-09-01,PA India CFR,1160.0
2021-10-01,PA India CFR,1330.0
2021-11-01,PA India CFR,1330.0
2021-12-01,PA India CFR,1330.0
2022-01-01,PA India CFR,1530.0
2022-02-01,PA India CFR,1530.0
2022-03-01,PA India CFR,1530.0
2022-04-01,PA India CFR,1715.0
2022-05-01,PA India CFR,1715.0
2022-06-01,PA India CFR,1715.0
2022-07-01,PA India CFR,1715.0
2022-08-01,PA India CFR,1715.0
2022-09-01,PA India CFR,1715.0
2022-10-01,PA India CFR,1175.0
2022-11-01,PA India CFR,1175.0
2022-12-01,PA India CFR,1175.0
2023-01-01,PA India CFR,1050.0
2023-02-01,PA India CFR,1050.0
2023-03-01,PA India CFR,1050.0
2023-04-01,PA India CFR,970.0
2023-05-01,PA India CFR,970.0
2023-06-01,PA India CFR,970.0
2023-07-01,PA India CFR,850.0
2023-08-01,PA India CFR,850.0
2023-09-01,PA India CFR,850.0
2023-10-01,PA India CFR,985.0
2023-11-01,PA India CFR,985.0
2023-12-01,PA India CFR,985.0
2024-01-01,PA India CFR,968.0
2024-02-01,PA India CFR,968.0
2024-03-01,PA India CFR,968.0
2024-04-01,PA India CFR,948.0
2024-05-01,PA India CFR,948.0
2024-06-01,PA India CFR,948.0
2024-07-01,PA India CFR,948.5
2024-08-01,PA India CFR,950.0
2024-09-01,PA India CFR,950.0
2024-10-01,PA India CFR,1060.0
2024-11-01,PA India CFR,1060.0
2024-12-01,PA India CFR,1060.0
2025-01-01,PA India CFR,1055.0
2025-02-01,PA India CFR,1055.0
2025-03-01,PA India CFR,1055.0
2025-04-01,PA India CFR,1153.0
2025-05-01,PA India CFR,1153.0
2025-06-01,PA India CFR,1153.0
2025-07-01,PA India CFR,1258.0
2025-08-01,PA India CFR,1258.0
2025-09-01,PA India CFR,1258.0
2025-10-01,PA India CFR,1290.0
2010-01-01,PR Moroco (68-72% BPL) FOB,97.5
2010-02-01,PR Moroco (68-72% BPL) FOB,103.75
2010-03-01,PR Moroco (68-72% BPL) FOB,105.0
2010-04-01,PR Moroco (68-72% BPL) FOB,125.0
2010-05-01,PR Moroco (68-72% BPL) FOB,125.0
2010-06-01,PR Moroco (68-72% BPL) FOB,125.0
2010-07-01,PR Moroco (68-72% BPL) FOB,125.0
2010-08-01,PR Moroco (68-72% BPL) FOB,125.0
2010-09-01,PR Moroco (68-72% BPL) FOB,125.0
2010-10-01,PR Moroco (68-72% BPL) FOB,140.0
2010-11-01,PR Moroco (68-72% BPL) FOB,140.0
2010-12-01,PR Moroco (68-72% BPL) FOB,140.0
2011-01-01,PR Moroco (68-72% BPL) FOB,155.0
2011-02-01,PR Moroco (68-72% BPL) FOB,160.0
2011-03-01,PR Moroco (68-72% BPL) FOB,160.0
2011-04-01,PR Moroco (68-72% BPL) FOB,183.0
2011-05-01,PR Moroco (68-72% BPL) FOB,183.0
2011-06-01,PR Moroco (68-72% BPL) FOB,183.0
2011-07-01,PR Moroco (68-72% BPL) FOB,198.0
2011-08-01,PR Moroco (68-72% BPL) FOB,198.0
2011-09-01,PR Moroco (68-72% BPL) FOB,198.0
2011-10-01,PR Moroco (68-72% BPL) FOB,199.25
2011-11-01,PR Moroco (68-72% BPL) FOB,203.0
2011-12-01,PR Moroco (68-72% BPL) FOB,203.0
2012-01-01,PR Moroco (68-72% BPL) FOB,203.0
2012-02-01,PR Moroco (68-72% BPL) FOB,193.0
2012-03-01,PR Moroco (68-72% BPL) FOB,193.0
2012-04-01,PR Moroco (68-72% BPL) FOB,188.5
2012-05-01,PR Moroco (68-72% BPL) FOB,175.0
2012-06-01,PR Moroco (68-72% BPL) FOB,175.0
2012-07-01,PR Moroco (68-72% BPL) FOB,180.0
2012-08-01,PR Moroco (68-72% BPL) FOB,185.0
2012-09-01,PR Moroco (68-72% BPL) FOB,185.0
2012-10-01,PR Moroco (68-72% BPL) FOB,185.0
2012-11-01,PR Moroco (68-72% BPL) FOB,185.0
2012-12-01,PR Moroco (68-72% BPL) FOB,185.0
2013-01-01,PR Moroco (68-72% BPL) FOB,179.0
2013-02-01,PR Moroco (68-72% BPL) FOB,170.0
2013-03-01,PR Moroco (68-72% BPL) FOB,170.0
2013-04-01,PR Moroco (68-72% BPL) FOB,168.75
2013-05-01,PR Moroco (68-72% BPL) FOB,165.0
2013-06-01,PR Moroco (68-72% BPL) FOB,165.0
2013-07-01,PR Moroco (68-72% BPL) FOB,160.0
2013-08-01,PR Moroco (68-72% BPL) FOB,141.6
2013-09-01,PR Moroco (68-72% BPL) FOB,128.0
2013-10-01,PR Moroco (68-72% BPL) FOB,120.8
2013-11-01,PR Moroco (68-72% BPL) FOB,108.5
2013-12-01,PR Moroco (68-72% BPL) FOB,101.0
2014-01-01,PR Moroco (68-72% BPL) FOB,102.2
2014-02-01,PR Moroco (68-72% BPL) FOB,103.0
2014-03-01,PR Moroco (68-72% BPL) FOB,108.0
2014-04-01,PR Moroco (68-72% BPL) FOB,108.0
2014-05-01,PR Moroco (68-72% BPL) FOB,113.4
2014-06-01,PR Moroco (68-72% BPL) FOB,110.0
2014-07-01,PR Moroco (68-72% BPL) FOB,110.0
2014-08-01,PR Moroco (68-72% BPL) FOB,110.0
2014-09-01,PR Moroco (68-72% BPL) FOB,115.0
2014-10-01,PR Moroco (68-72% BPL) FOB,115.0
2014-11-01,PR Moroco (68-72% BPL) FOB,115.0
2014-12-01,PR Moroco (68-72% BPL) FOB,115.0
2015-01-01,PR Moroco (68-72% BPL) FOB,115.0
2015-02-01,PR Moroco (68-72% BPL) FOB,115.0
2015-03-01,PR Moroco (68-72% BPL) FOB,115.0
2015-04-01,PR Moroco (68-72% BPL) FOB,115.0
2015-05-01,PR Moroco (68-72% BPL) FOB,115.0
2015-06-01,PR Moroco (68-72% BPL) FOB,115.0
2015-07-01,PR Moroco (68-72% BPL) FOB,115.0
2015-08-01,PR Moroco (68-72% BPL) FOB,115.0
2015-09-01,PR Moroco (68-72% BPL) FOB,121.0
2015-10-01,PR Moroco (68-72% BPL) FOB,123.0
2015-11-01,PR Moroco (68-72% BPL) FOB,123.0
2015-12-01,PR Moroco (68-72% BPL) FOB,123.0
2016-01-01,PR Moroco (68-72% BPL) FOB,118.5
2016-02-01,PR Moroco (68-72% BPL) FOB,115.0
2016-03-01,PR Moroco (68-72% BPL) FOB,115.0
2016-04-01,PR Moroco (68-72% BPL) FOB,115.0
2016-05-01,PR Moroco (68-72% BPL) FOB,115.0
2016-06-01,PR Moroco (68-72% BPL) FOB,115.0
2016-07-01,PR Moroco (68-72% BPL) FOB,115.0
2016-08-01,PR Moroco (68-72% BPL) FOB,111.25
2016-09-01,PR Moroco (68-72% BPL) FOB,110.0
2016-10-01,PR Moroco (68-72% BPL) FOB,110.0
2016-11-01,PR Moroco (68-72% BPL) FOB,104.75
2016-12-01,PR Moroco (68-72% BPL) FOB,103.0
2017-01-01,PR Moroco (68-72% BPL) FOB,99.25
2017-02-01,PR Moroco (68-72% BPL) FOB,98.0
2017-03-01,PR Moroco (68-72% BPL) FOB,98.0
2017-04-01,PR Moroco (68-72% BPL) FOB,96.75
2017-05-01,PR Moroco (68-72% BPL) FOB,93.0
2017-06-01,PR Moroco (68-72% BPL) FOB,93.0
2017-07-01,PR Moroco (68-72% BPL) FOB,88.0
2017-08-01,PR Moroco (68-72% BPL) FOB,86.8
2017-09-01,PR Moroco (68-72% BPL) FOB,83.75
2017-10-01,PR Moroco (68-72% BPL) FOB,80.0
2017-11-01,PR Moroco (68-72% BPL) FOB,80.0
2017-12-01,PR Moroco (68-72% BPL) FOB,80.0
2018-01-01,PR Moroco (68-72% BPL) FOB,81.5
2018-02-01,PR Moroco (68-72% BPL) FOB,86.0
2018-03-01,PR Moroco (68-72% BPL) FOB,86.0
2018-04-01,PR Moroco (68-72% BPL) FOB,87.25
2018-05-01,PR Moroco (68-72% BPL) FOB,91.0
2018-06-01,PR Moroco (68-72% BPL) FOB,91.0
2018-07-01,PR Moroco (68-72% BPL) FOB,96.0
2018-08-01,PR Moroco (68-72% BPL) FOB,96.0
2018-09-01,PR Moroco (68-72% BPL) FOB,96.0
2018-10-01,PR Moroco (68-72% BPL) FOB,96.75
2018-11-01,PR Moroco (68-72% BPL) FOB,97.0
2018-12-01,PR Moroco (68-72% BPL) FOB,97.0
2019-01-01,PR Moroco (68-72% BPL) FOB,97.6
2019-02-01,PR Moroco (68-72% BPL) FOB,100.0
2019-03-01,PR Moroco (68-72% BPL) FOB,100.0
2019-04-01,PR Moroco (68-72% BPL) FOB,100.0
2019-05-01,PR Moroco (68-72% BPL) FOB,100.0
2019-06-01,PR Moroco (68-72% BPL) FOB,100.0
2019-07-01,PR Moroco (68-72% BPL) FOB,93.0
2019-08-01,PR Moroco (68-72% BPL) FOB,93.0
2019-09-01,PR Moroco (68-72% BPL) FOB,93.0
2019-10-01,PR Moroco (68-72% BPL) FOB,89.8
2019-11-01,PR Moroco (68-72% BPL) FOB,89.0
2019-12-01,PR Moroco (68-72% BPL) FOB,89.0
2020-01-01,PR Moroco (68-72% BPL) FOB,85.8
2020-02-01,PR Moroco (68-72% BPL) FOB,85.0
2020-03-01,PR Moroco (68-72% BPL) FOB,85.0
2020-04-01,PR Moroco (68-72% BPL) FOB,86.0
2020-05-01,PR Moroco (68-72% BPL) FOB,90.0
2020-06-01,PR Moroco (68-72% BPL) FOB,90.0
2020-07-01,PR Moroco (68-72% BPL) FOB,91.8
2020-08-01,PR Moroco (68-72% BPL) FOB,93.0
2020-09-01,PR Moroco (68-72% BPL) FOB,93.0
2020-10-01,PR Moroco (68-72% BPL) FOB,95.0
2020-11-01,PR Moroco (68-72% BPL) FOB,95.0
2020-12-01,PR Moroco (68-72% BPL) FOB,95.0
2021-01-01,PR Moroco (68-72% BPL) FOB,95.0
2021-02-01,PR Moroco (68-72% BPL) FOB,105.0
2021-03-01,PR Moroco (68-72% BPL) FOB,105.0
2021-04-01,PR Moroco (68-72% BPL) FOB,110.0
2021-05-01,PR Moroco (68-72% BPL) FOB,130.0
2021-06-01,PR Moroco (68-72% BPL) FOB,130.0
2021-07-01,PR Moroco (68-72% BPL) FOB,139.6
2021-08-01,PR Moroco (68-72% BPL) FOB,154.0
2021-09-01,PR Moroco (68-72% BPL) FOB,154.0
2021-10-01,PR Moroco (68-72% BPL) FOB,154.0
2021-11-01,PR Moroco (68-72% BPL) FOB,175.75
2021-12-01,PR Moroco (68-72% BPL) FOB,183.0
2022-01-01,PR Moroco (68-72% BPL) FOB,183.0
2022-02-01,PR Moroco (68-72% BPL) FOB,183.0
2022-03-01,PR Moroco (68-72% BPL) FOB,260.0
2022-04-01,PR Moroco (68-72% BPL) FOB,260.0
2022-05-01,PR Moroco (68-72% BPL) FOB,260.0
2022-06-01,PR Moroco (68-72% BPL) FOB,328.0
2022-07-01,PR Moroco (68-72% BPL) FOB,320.0
2022-08-01,PR Moroco (68-72% BPL) FOB,320.0
2022-09-01,PR Moroco (68-72% BPL) FOB,320.0
2022-10-01,PR Moroco (68-72% BPL) FOB,290.0
2022-11-01,PR Moroco (68-72% BPL) FOB,290.0
2022-12-01,PR Moroco (68-72% BPL) FOB,290.0
2023-01-01,PR Moroco (68-72% BPL) FOB,300.0
2023-02-01,PR Moroco (68-72% BPL) FOB,300.0
2023-03-01,PR Moroco (68-72% BPL) FOB,300.0
2023-04-01,PR Moroco (68-72% BPL) FOB,285.0
2023-05-01,PR Moroco (68-72% BPL) FOB,285.0
2023-06-01,PR Moroco (68-72% BPL) FOB,285.0
2023-07-01,PR Moroco (68-72% BPL) FOB,215.0
2023-08-01,PR Moroco (68-72% BPL) FOB,215.0
2023-09-01,PR Moroco (68-72% BPL) FOB,215.0
2023-10-01,PR Moroco (68-72% BPL) FOB,220.0
2023-11-01,PR Moroco (68-72% BPL) FOB,220.0
2023-12-01,PR Moroco (68-72% BPL) FOB,220.0
2024-01-01,PR Moroco (68-72% BPL) FOB,208.0
2024-02-01,PR Moroco (68-72% BPL) FOB,208.0
2024-03-01,PR Moroco (68-72% BPL) FOB,208.0
2024-04-01,PR Moroco (68-72% BPL) FOB,220.0
2024-05-01,PR Moroco (68-72% BPL) FOB,220.0
2024-06-01,PR Moroco (68-72% BPL) FOB,220.0
2024-07-01,PR Moroco (68-72% BPL) FOB,220.0
2024-08-01,PR Moroco (68-72% BPL) FOB,220.0
2024-09-01,PR Moroco (68-72% BPL) FOB,220.0
2024-10-01,PR Moroco (68-72% BPL) FOB,186.0
2024-11-01,PR Moroco (68-72% BPL) FOB,186.0
2024-12-01,PR Moroco (68-72% BPL) FOB,186.0
2025-01-01,PR Moroco (68-72% BPL) FOB,218.0
2025-02-01,PR Moroco (68-72% BPL) FOB,218.0
2025-03-01,PR Moroco (68-72% BPL) FOB,218.0
2025-04-01,PR Moroco (68-72% BPL) FOB,207.0
2025-05-01,PR Moroco (68-72% BPL) FOB,207.0
2025-06-01,PR Moroco (68-72% BPL) FOB,207.0
2025-07-01,PR Moroco (68-72% BPL) FOB,211.0
2025-08-01,PR Moroco (68-72% BPL) FOB,211.0
2025-09-01,PR Moroco (68-72% BPL) FOB,211.0
2025-10-01,PR Moroco (68-72% BPL) FOB,213.4
2013-11-01,PR Jordan (66-72% BPL) FOB,97.5
2013-12-01,PR Jordan (66-72% BPL) FOB,100.0
2014-01-01,PR Jordan (66-72% BPL) FOB,100.0
2014-02-01,PR Jordan (66-72% BPL) FOB,100.0
2014-03-01,PR Jordan (66-72% BPL) FOB,100.0
2014-04-01,PR Jordan (66-72% BPL) FOB,100.0
2014-05-01,PR Jordan (66-72% BPL) FOB,100.0
2014-06-01,PR Jordan (66-72% BPL) FOB,100.0
2014-07-01,PR Jordan (66-72% BPL) FOB,105.0
2014-08-01,PR Jordan (66-72% BPL) FOB,105.0
2014-09-01,PR Jordan (66-72% BPL) FOB,105.0
2014-10-01,PR Jordan (66-72% BPL) FOB,105.0
2014-11-01,PR Jordan (66-72% BPL) FOB,107.25
2014-12-01,PR Jordan (66-72% BPL) FOB,110.0
2015-01-01,PR Jordan (66-72% BPL) FOB,112.0
2015-02-01,PR Jordan (66-72% BPL) FOB,112.0
2015-03-01,PR Jordan (66-72% BPL) FOB,112.0
2015-04-01,PR Jordan (66-72% BPL) FOB,112.0
2015-05-01,PR Jordan (66-72% BPL) FOB,112.75
2015-06-01,PR Jordan (66-72% BPL) FOB,115.0
2015-07-01,PR Jordan (66-72% BPL) FOB,115.0
2015-08-01,PR Jordan (66-72% BPL) FOB,115.0
2015-09-01,PR Jordan (66-72% BPL) FOB,115.0
2015-10-01,PR Jordan (66-72% BPL) FOB,115.0
2015-11-01,PR Jordan (66-72% BPL) FOB,115.0
2015-12-01,PR Jordan (66-72% BPL) FOB,115.0
2016-01-01,PR Jordan (66-72% BPL) FOB,115.0
2016-02-01,PR Jordan (66-72% BPL) FOB,105.5
2016-03-01,PR Jordan (66-72% BPL) FOB,103.0
2016-04-01,PR Jordan (66-72% BPL) FOB,102.25
2016-05-01,PR Jordan (66-72% BPL) FOB,100.0
2016-06-01,PR Jordan (66-72% BPL) FOB,100.0
2016-07-01,PR Jordan (66-72% BPL) FOB,100.0
2016-08-01,PR Jordan (66-72% BPL) FOB,97.5
2016-09-01,PR Jordan (66-72% BPL) FOB,95.0
2016-10-01,PR Jordan (66-72% BPL) FOB,94.75
2016-11-01,PR Jordan (66-72% BPL) FOB,94.0
2016-12-01,PR Jordan (66-72% BPL) FOB,94.0
2017-01-01,PR Jordan (66-72% BPL) FOB,94.0
2017-02-01,PR Jordan (66-72% BPL) FOB,94.0
2017-03-01,PR Jordan (66-72% BPL) FOB,91.2
2017-04-01,PR Jordan (66-72% BPL) FOB,87.0
2017-05-01,PR Jordan (66-72% BPL) FOB,87.0
2017-06-01,PR Jordan (66-72% BPL) FOB,87.0
2017-07-01,PR Jordan (66-72% BPL) FOB,87.0
2017-08-01,PR Jordan (66-72% BPL) FOB,86.2
2017-09-01,PR Jordan (66-72% BPL) FOB,88.0
2017-10-01,PR Jordan (66-72% BPL) FOB,88.0
2017-11-01,PR Jordan (66-72% BPL) FOB,83.0
2017-12-01,PR Jordan (66-72% BPL) FOB,83.0
2018-01-01,PR Jordan (66-72% BPL) FOB,83.0
2018-02-01,PR Jordan (66-72% BPL) FOB,83.0
2018-03-01,PR Jordan (66-72% BPL) FOB,89.0
2018-04-01,PR Jordan (66-72% BPL) FOB,89.0
2018-05-01,PR Jordan (66-72% BPL) FOB,89.0
2018-06-01,PR Jordan (66-72% BPL) FOB,94.0
2018-07-01,PR Jordan (66-72% BPL) FOB,94.0
2018-08-01,PR Jordan (66-72% BPL) FOB,98.0
2018-09-01,PR Jordan (66-72% BPL) FOB,98.0
2018-10-01,PR Jordan (66-72% BPL) FOB,98.0
2018-11-01,PR Jordan (66-72% BPL) FOB,98.0
2018-12-01,PR Jordan (66-72% BPL) FOB,98.0
2019-01-01,PR Jordan (66-72% BPL) FOB,98.0
2019-02-01,PR Jordan (66-72% BPL) FOB,98.0
2019-03-01,PR Jordan (66-72% BPL) FOB,98.0
2019-04-01,PR Jordan (66-72% BPL) FOB,98.0
2019-05-01,PR Jordan (66-72% BPL) FOB,98.0
2019-06-01,PR Jordan (66-72% BPL) FOB,98.0
2019-07-01,PR Jordan (66-72% BPL) FOB,94.25
2019-08-01,PR Jordan (66-72% BPL) FOB,79.4
2019-09-01,PR Jordan (66-72% BPL) FOB,76.0
2019-10-01,PR Jordan (66-72% BPL) FOB,76.0
2019-11-01,PR Jordan (66-72% BPL) FOB,74.5
2019-12-01,PR Jordan (66-72% BPL) FOB,74.0
2020-01-01,PR Jordan (66-72% BPL) FOB,74.0
2020-02-01,PR Jordan (66-72% BPL) FOB,74.0
2020-03-01,PR Jordan (66-72% BPL) FOB,74.0
2020-04-01,PR Jordan (66-72% BPL) FOB,74.0
2020-05-01,PR Jordan (66-72% BPL) FOB,74.5
2020-06-01,PR Jordan (66-72% BPL) FOB,75.0
2020-07-01,PR Jordan (66-72% BPL) FOB,75.0
2020-08-01,PR Jordan (66-72% BPL) FOB,79.0
2020-09-01,PR Jordan (66-72% BPL) FOB,83.0
2020-10-01,PR Jordan (66-72% BPL) FOB,83.0
2020-11-01,PR Jordan (66-72% BPL) FOB,85.0
2020-12-01,PR Jordan (66-72% BPL) FOB,85.0
2021-01-01,PR Jordan (66-72% BPL) FOB,85.0
2021-02-01,PR Jordan (66-72% BPL) FOB,85.0
2021-03-01,PR Jordan (66-72% BPL) FOB,90.25
2021-04-01,PR Jordan (66-72% BPL) FOB,92.0
2021-05-01,PR Jordan (66-72% BPL) FOB,97.0
2021-06-01,PR Jordan (66-72% BPL) FOB,112.0
2021-07-01,PR Jordan (66-72% BPL) FOB,112.0
2021-08-01,PR Jordan (66-72% BPL) FOB,117.0
2021-09-01,PR Jordan (66-72% BPL) FOB,122.0
2021-10-01,PR Jordan (66-72% BPL) FOB,122.0
2021-11-01,PR Jordan (66-72% BPL) FOB,126.5
2021-12-01,PR Jordan (66-72% BPL) FOB,140.0
2022-01-01,PR Jordan (66-72% BPL) FOB,140.0
2022-02-01,PR Jordan (66-72% BPL) FOB,140.0
2022-03-01,PR Jordan (66-72% BPL) FOB,161.0
2022-04-01,PR Jordan (66-72% BPL) FOB,175.0
2022-05-01,PR Jordan (66-72% BPL) FOB,175.0
2022-06-01,PR Jordan (66-72% BPL) FOB,201.4
2022-07-01,PR Jordan (66-72% BPL) FOB,200.0
2022-08-01,PR Jordan (66-72% BPL) FOB,200.0
2022-09-01,PR Jordan (66-72% BPL) FOB,200.0
2022-10-01,PR Jordan (66-72% BPL) FOB,200.0
2022-11-01,PR Jordan (66-72% BPL) FOB,198.75
2022-12-01,PR Jordan (66-72% BPL) FOB,195.0
2023-01-01,PR Jordan (66-72% BPL) FOB,185.0
2023-02-01,PR Jordan (66-72% BPL) FOB,185.0
2023-03-01,PR Jordan (66-72% BPL) FOB,185.0
2023-04-01,PR Jordan (66-72% BPL) FOB,180.0
2023-05-01,PR Jordan (66-72% BPL) FOB,180.0
2023-06-01,PR Jordan (66-72% BPL) FOB,180.0
2023-07-01,PR Jordan (66-72% BPL) FOB,180.0
2023-08-01,PR Jordan (66-72% BPL) FOB,180.0
2023-09-01,PR Jordan (66-72% BPL) FOB,180.0
2023-10-01,PR Jordan (66-72% BPL) FOB,180.0
2023-11-01,PR Jordan (66-72% BPL) FOB,180.0
2023-12-01,PR Jordan (66-72% BPL) FOB,180.0
2024-01-01,PR Jordan (66-72% BPL) FOB,170.0
2024-02-01,PR Jordan (66-72% BPL) FOB,170.0
2024-03-01,PR Jordan (66-72% BPL) FOB,170.0
2024-04-01,PR Jordan (66-72% BPL) FOB,170.0
2024-05-01,PR Jordan (66-72% BPL) FOB,170.0
2024-06-01,PR Jordan (66-72% BPL) FOB,170.0
2024-07-01,PR Jordan (66-72% BPL) FOB,170.0
2024-08-01,PR Jordan (66-72% BPL) FOB,170.0
2024-09-01,PR Jordan (66-72% BPL) FOB,170.0
2024-10-01,PR Jordan (66-72% BPL) FOB,170.0
2024-11-01,PR Jordan (66-72% BPL) FOB,170.0
2024-12-01,PR Jordan (66-72% BPL) FOB,170.0
2025-01-01,PR Jordan (66-72% BPL) FOB,155.0
2025-02-01,PR Jordan (66-72% BPL) FOB,155.0
2025-03-01,PR Jordan (66-72% BPL) FOB,155.0
2025-04-01,PR Jordan (66-72% BPL) FOB,155.0
2025-05-01,PR Jordan (66-72% BPL) FOB,155.0
2025-06-01,PR Jordan (66-72% BPL) FOB,155.0
2025-07-01,PR Jordan (66-72% BPL) FOB,155.0
2025-08-01,PR Jordan (66-72% BPL) FOB,155.0
2025-09-01,PR Jordan (66-72% BPL) FOB,155.0
2025-10-01,PR Jordan (66-72% BPL) FOB,155.0
2013-11-01,PR Jordan (73-75% BPL) FOB,112.0
2013-12-01,PR Jordan (73-75% BPL) FOB,115.0
2014-01-01,PR Jordan (73-75% BPL) FOB,115.0
2014-02-01,PR Jordan (73-75% BPL) FOB,115.0
2014-03-01,PR Jordan (73-75% BPL) FOB,115.0
2014-04-01,PR Jordan (73-75% BPL) FOB,115.0
2014-05-01,PR Jordan (73-75% BPL) FOB,115.0
2014-06-01,PR Jordan (73-75% BPL) FOB,115.0
2014-07-01,PR Jordan (73-75% BPL) FOB,124.0
2014-08-01,PR Jordan (73-75% BPL) FOB,124.0
2014-09-01,PR Jordan (73-75% BPL) FOB,124.0
2014-10-01,PR Jordan (73-75% BPL) FOB,124.0
2014-11-01,PR Jordan (73-75% BPL) FOB,124.0
2014-12-01,PR Jordan (73-75% BPL) FOB,128.25
2015-01-01,PR Jordan (73-75% BPL) FOB,133.0
2015-02-01,PR Jordan (73-75% BPL) FOB,133.0
2015-03-01,PR Jordan (73-75% BPL) FOB,133.0
2015-04-01,PR Jordan (73-75% BPL) FOB,133.0
2015-05-01,PR Jordan (73-75% BPL) FOB,133.25
2015-06-01,PR Jordan (73-75% BPL) FOB,134.0
2015-07-01,PR Jordan (73-75% BPL) FOB,134.0
2015-08-01,PR Jordan (73-75% BPL) FOB,134.0
2015-09-01,PR Jordan (73-75% BPL) FOB,134.0
2015-10-01,PR Jordan (73-75% BPL) FOB,134.0
2015-11-01,PR Jordan (73-75% BPL) FOB,134.0
2015-12-01,PR Jordan (73-75% BPL) FOB,134.0
2016-01-01,PR Jordan (73-75% BPL) FOB,134.0
2016-02-01,PR Jordan (73-75% BPL) FOB,123.0
2016-03-01,PR Jordan (73-75% BPL) FOB,123.0
2016-04-01,PR Jordan (73-75% BPL) FOB,122.25
2016-05-01,PR Jordan (73-75% BPL) FOB,120.0
2016-06-01,PR Jordan (73-75% BPL) FOB,120.0
2016-07-01,PR Jordan (73-75% BPL) FOB,120.0
2016-08-01,PR Jordan (73-75% BPL) FOB,117.5
2016-09-01,PR Jordan (73-75% BPL) FOB,115.0
2016-10-01,PR Jordan (73-75% BPL) FOB,114.75
2016-11-01,PR Jordan (73-75% BPL) FOB,114.0
2016-12-01,PR Jordan (73-75% BPL) FOB,114.0
2017-01-01,PR Jordan (73-75% BPL) FOB,114.0
2017-02-01,PR Jordan (73-75% BPL) FOB,114.0
2017-03-01,PR Jordan (73-75% BPL) FOB,112.8
2017-04-01,PR Jordan (73-75% BPL) FOB,111.0
2017-05-01,PR Jordan (73-75% BPL) FOB,111.0
2017-06-01,PR Jordan (73-75% BPL) FOB,111.0
2017-07-01,PR Jordan (73-75% BPL) FOB,111.0
2017-08-01,PR Jordan (73-75% BPL) FOB,109.8
2017-09-01,PR Jordan (73-75% BPL) FOB,109.0
2017-10-01,PR Jordan (73-75% BPL) FOB,109.0
2017-11-01,PR Jordan (73-75% BPL) FOB,100.0
2017-12-01,PR Jordan (73-75% BPL) FOB,100.0
2018-01-01,PR Jordan (73-75% BPL) FOB,100.0
2018-02-01,PR Jordan (73-75% BPL) FOB,100.0
2018-03-01,PR Jordan (73-75% BPL) FOB,107.0
2018-04-01,PR Jordan (73-75% BPL) FOB,107.0
2018-05-01,PR Jordan (73-75% BPL) FOB,107.0
2018-06-01,PR Jordan (73-75% BPL) FOB,112.0
2018-07-01,PR Jordan (73-75% BPL) FOB,112.0
2018-08-01,PR Jordan (73-75% BPL) FOB,116.0
2018-09-01,PR Jordan (73-75% BPL) FOB,116.0
2018-10-01,PR Jordan (73-75% BPL) FOB,116.0
2018-11-01,PR Jordan (73-75% BPL) FOB,116.0
2018-12-01,PR Jordan (73-75% BPL) FOB,116.0
2019-01-01,PR Jordan (73-75% BPL) FOB,116.0
2019-02-01,PR Jordan (73-75% BPL) FOB,116.0
2019-03-01,PR Jordan (73-75% BPL) FOB,116.0
2019-04-01,PR Jordan (73-75% BPL) FOB,116.0
2019-05-01,PR Jordan (73-75% BPL) FOB,116.0
2019-06-01,PR Jordan (73-75% BPL) FOB,116.0
2019-07-01,PR Jordan (73-75% BPL) FOB,111.5
2019-08-01,PR Jordan (73-75% BPL) FOB,108.4
2019-09-01,PR Jordan (73-75% BPL) FOB,108.0
2019-10-01,PR Jordan (73-75% BPL) FOB,108.0
2019-11-01,PR Jordan (73-75% BPL) FOB,105.0
2019-12-01,PR Jordan (73-75% BPL) FOB,104.0
2020-01-01,PR Jordan (73-75% BPL) FOB,104.0
2020-02-01,PR Jordan (73-75% BPL) FOB,104.0
2020-03-01,PR Jordan (73-75% BPL) FOB,103.0
2020-04-01,PR Jordan (73-75% BPL) FOB,103.0
2020-05-01,PR Jordan (73-75% BPL) FOB,103.0
2020-06-01,PR Jordan (73-75% BPL) FOB,103.0
2020-07-01,PR Jordan (73-75% BPL) FOB,103.0
2020-08-01,PR Jordan (73-75% BPL) FOB,105.5
2020-09-01,PR Jordan (73-75% BPL) FOB,108.0
2020-10-01,PR Jordan (73-75% BPL) FOB,108.0
2020-11-01,PR Jordan (73-75% BPL) FOB,108.0
2020-12-01,PR Jordan (73-75% BPL) FOB,108.0
2021-01-01,PR Jordan (73-75% BPL) FOB,108.0
2021-02-01,PR Jordan (73-75% BPL) FOB,108.0
2021-03-01,PR Jordan (73-75% BPL) FOB,115.5
2021-04-01,PR Jordan (73-75% BPL) FOB,118.0
2021-05-01,PR Jordan (73-75% BPL) FOB,124.75
2021-06-01,PR Jordan (73-75% BPL) FOB,145.0
2021-07-01,PR Jordan (73-75% BPL) FOB,145.0
2021-08-01,PR Jordan (73-75% BPL) FOB,155.0
2021-09-01,PR Jordan (73-75% BPL) FOB,165.0
2021-10-01,PR Jordan (73-75% BPL) FOB,165.0
2021-11-01,PR Jordan (73-75% BPL) FOB,168.75
2021-12-01,PR Jordan (73-75% BPL) FOB,180.0
2022-01-01,PR Jordan (73-75% BPL) FOB,180.0
2022-02-01,PR Jordan (73-75% BPL) FOB,180.0
2022-03-01,PR Jordan (73-75% BPL) FOB,219.0
2022-04-01,PR Jordan (73-75% BPL) FOB,245.0
2022-05-01,PR Jordan (73-75% BPL) FOB,245.0
2022-06-01,PR Jordan (73-75% BPL) FOB,273.0
2022-07-01,PR Jordan (73-75% BPL) FOB,260.0
2022-08-01,PR Jordan (73-75% BPL) FOB,260.0
2022-09-01,PR Jordan (73-75% BPL) FOB,260.0
2022-10-01,PR Jordan (73-75% BPL) FOB,260.0
2022-11-01,PR Jordan (73-75% BPL) FOB,258.75
2022-12-01,PR Jordan (73-75% BPL) FOB,255.0
2023-01-01,PR Jordan (73-75% BPL) FOB,245.0
2023-02-01,PR Jordan (73-75% BPL) FOB,245.0
2023-03-01,PR Jordan (73-75% BPL) FOB,245.0
2023-04-01,PR Jordan (73-75% BPL) FOB,245.0
2023-05-01,PR Jordan (73-75% BPL) FOB,245.0
2023-06-01,PR Jordan (73-75% BPL) FOB,245.0
2023-07-01,PR Jordan (73-75% BPL) FOB,235.0
2023-08-01,PR Jordan (73-75% BPL) FOB,235.0
2023-09-01,PR Jordan (73-75% BPL) FOB,235.0
2023-10-01,PR Jordan (73-75% BPL) FOB,235.0
2023-11-01,PR Jordan (73-75% BPL) FOB,235.0
2023-12-01,PR Jordan (73-75% BPL) FOB,235.0
2024-01-01,PR Jordan (73-75% BPL) FOB,235.0
2024-02-01,PR Jordan (73-75% BPL) FOB,235.0
2024-03-01,PR Jordan (73-75% BPL) FOB,235.0
2024-04-01,PR Jordan (73-75% BPL) FOB,235.0
2024-05-01,PR Jordan (73-75% BPL) FOB,235.0
2024-06-01,PR Jordan (73-75% BPL) FOB,235.0
2024-07-01,PR Jordan (73-75% BPL) FOB,235.0
2024-08-01,PR Jordan (73-75% BPL) FOB,235.0
2024-09-01,PR Jordan (73-75% BPL) FOB,235.0
2024-10-01,PR Jordan (73-75% BPL) FOB,235.0
2024-11-01,PR Jordan (73-75% BPL) FOB,235.0
2024-12-01,PR Jordan (73-75% BPL) FOB,235.0
2025-01-01,PR Jordan (73-75% BPL) FOB,235.0
2025-02-01,PR Jordan (73-75% BPL) FOB,235.0
2025-03-01,PR Jordan (73-75% BPL) FOB,235.0
2025-04-01,PR Jordan (73-75% BPL) FOB,235.0
2025-05-01,PR Jordan (73-75% BPL) FOB,235.0
2025-06-01,PR Jordan (73-75% BPL) FOB,235.0
2025-07-01,PR Jordan (73-75% BPL) FOB,235.0
2025-08-01,PR Jordan (73-75% BPL) FOB,235.0
2025-09-01,PR Jordan (73-75% BPL) FOB,235.0
2025-10-01,PR Jordan (73-75% BPL) FOB,235.0
2010-01-01,Potash Standard Vancouver FOB,354.75
2010-02-01,Potash Standard Vancouver FOB,335.5
2010-03-01,Potash Standard Vancouver FOB,313.0
2010-04-01,Potash Standard Vancouver FOB,313.8
2010-05-01,Potash Standard Vancouver FOB,315.0
2010-06-01,Potash Standard Vancouver FOB,318.75
2010-07-01,Potash Standard Vancouver FOB,320.0
2010-08-01,Potash Standard Vancouver FOB,345.0
2010-09-01,Potash Standard Vancouver FOB,337.8
2010-10-01,Potash Standard Vancouver FOB,335.25
2010-11-01,Potash Standard Vancouver FOB,341.0
2010-12-01,Potash Standard Vancouver FOB,349.2
2011-01-01,Potash Standard Vancouver FOB,367.5
2011-02-01,Potash Standard Vancouver FOB,375.0
2011-03-01,Potash Standard Vancouver FOB,380.0
2011-04-01,Potash Standard Vancouver FOB,413.75
2011-05-01,Potash Standard Vancouver FOB,418.75
2011-06-01,Potash Standard Vancouver FOB,436.0
2011-07-01,Potash Standard Vancouver FOB,461.5
2011-08-01,Potash Standard Vancouver FOB,483.0
2011-09-01,Potash Standard Vancouver FOB,470.0
2011-10-01,Potash Standard Vancouver FOB,470.0
2011-11-01,Potash Standard Vancouver FOB,473.75
2011-12-01,Potash Standard Vancouver FOB,475.0
2012-01-01,Potash Standard Vancouver FOB,476.25
2012-02-01,Potash Standard Vancouver FOB,483.75
2012-03-01,Potash Standard Vancouver FOB,480.0
2012-04-01,Potash Standard Vancouver FOB,469.0
2012-05-01,Potash Standard Vancouver FOB,458.0
2012-06-01,Potash Standard Vancouver FOB,458.0
2012-07-01,Potash Standard Vancouver FOB,463.0
2012-08-01,Potash Standard Vancouver FOB,468.0
2012-09-01,Potash Standard Vancouver FOB,464.25
2012-10-01,Potash Standard Vancouver FOB,444.0
2012-11-01,Potash Standard Vancouver FOB,425.0
2012-12-01,Potash Standard Vancouver FOB,425.0
2013-01-01,Potash Standard Vancouver FOB,395.0
2013-02-01,Potash Standard Vancouver FOB,388.0
2013-03-01,Potash Standard Vancouver FOB,390.0
2013-04-01,Potash Standard Vancouver FOB,391.5
2013-05-01,Potash Standard Vancouver FOB,393.0
2013-06-01,Potash Standard Vancouver FOB,393.0
2013-07-01,Potash Standard Vancouver FOB,393.0
2013-08-01,Potash Standard Vancouver FOB,394.0
2013-09-01,Potash Standard Vancouver FOB,390.0
2013-10-01,Potash Standard Vancouver FOB,359.0
2013-11-01,Potash Standard Vancouver FOB,334.0
2013-12-01,Potash Standard Vancouver FOB,332.0
2014-01-01,Potash Standard Vancouver FOB,323.2
2014-02-01,Potash Standard Vancouver FOB,310.0
2014-03-01,Potash Standard Vancouver FOB,310.0
2014-04-01,Potash Standard Vancouver FOB,287.0
2014-05-01,Potash Standard Vancouver FOB,287.0
2014-06-01,Potash Standard Vancouver FOB,287.0
2014-07-01,Potash Standard Vancouver FOB,287.0
2014-08-01,Potash Standard Vancouver FOB,287.0
2014-09-01,Potash Standard Vancouver FOB,287.0
2014-10-01,Potash Standard Vancouver FOB,290.8
2014-11-01,Potash Standard Vancouver FOB,306.0
2014-12-01,Potash Standard Vancouver FOB,306.0
2015-01-01,Potash Standard Vancouver FOB,305.4
2015-02-01,Potash Standard Vancouver FOB,305.0
2015-03-01,Potash Standard Vancouver FOB,305.0
2015-04-01,Potash Standard Vancouver FOB,307.0
2015-05-01,Potash Standard Vancouver FOB,307.0
2015-06-01,Potash Standard Vancouver FOB,307.0
2015-07-01,Potash Standard Vancouver FOB,305.0
2015-08-01,Potash Standard Vancouver FOB,303.0
2015-09-01,Potash Standard Vancouver FOB,300.0
2015-10-01,Potash Standard Vancouver FOB,300.0
2015-11-01,Potash Standard Vancouver FOB,296.25
2015-12-01,Potash Standard Vancouver FOB,295.0
2016-01-01,Potash Standard Vancouver FOB,289.5
2016-02-01,Potash Standard Vancouver FOB,282.25
2016-03-01,Potash Standard Vancouver FOB,277.0
2016-04-01,Potash Standard Vancouver FOB,269.5
2016-05-01,Potash Standard Vancouver FOB,264.25
2016-06-01,Potash Standard Vancouver FOB,255.6
2016-07-01,Potash Standard Vancouver FOB,227.5
2016-08-01,Potash Standard Vancouver FOB,220.0
2016-09-01,Potash Standard Vancouver FOB,215.0
2016-10-01,Potash Standard Vancouver FOB,216.25
2016-11-01,Potash Standard Vancouver FOB,215.0
2016-12-01,Potash Standard Vancouver FOB,215.0
2017-01-01,Potash Standard Vancouver FOB,215.0
2017-02-01,Potash Standard Vancouver FOB,214.25
2017-03-01,Potash Standard Vancouver FOB,214.0
2017-04-01,Potash Standard Vancouver FOB,214.0
2017-05-01,Potash Standard Vancouver FOB,216.5
2017-06-01,Potash Standard Vancouver FOB,218.0
2017-07-01,Potash Standard Vancouver FOB,217.5
2017-08-01,Potash Standard Vancouver FOB,217.0
2017-09-01,Potash Standard Vancouver FOB,216.25
2017-10-01,Potash Standard Vancouver FOB,222.0
2017-11-01,Potash Standard Vancouver FOB,222.2
2017-12-01,Potash Standard Vancouver FOB,224.0
2018-01-01,Potash Standard Vancouver FOB,225.0
2018-02-01,Potash Standard Vancouver FOB,226.75
2018-03-01,Potash Standard Vancouver FOB,228.8
2018-04-01,Potash Standard Vancouver FOB,231.5
2018-05-01,Potash Standard Vancouver FOB,237.0
2018-06-01,Potash Standard Vancouver FOB,235.5
2018-07-01,Potash Standard Vancouver FOB,233.0
2018-08-01,Potash Standard Vancouver FOB,234.2
2018-09-01,Potash Standard Vancouver FOB,245.75
2018-10-01,Potash Standard Vancouver FOB,260.25
2018-11-01,Potash Standard Vancouver FOB,269.6
2018-12-01,Potash Standard Vancouver FOB,273.6666666666667
2019-01-01,Potash Standard Vancouver FOB,275.0
2019-02-01,Potash Standard Vancouver FOB,276.5
2019-03-01,Potash Standard Vancouver FOB,273.0
2019-04-01,Potash Standard Vancouver FOB,273.75
2019-05-01,Potash Standard Vancouver FOB,271.0
2019-06-01,Potash Standard Vancouver FOB,272.0
2019-07-01,Potash Standard Vancouver FOB,269.75
2019-08-01,Potash Standard Vancouver FOB,260.8
2019-09-01,Potash Standard Vancouver FOB,257.5
2019-10-01,Potash Standard Vancouver FOB,256.2
2019-11-01,Potash Standard Vancouver FOB,256.25
2019-12-01,Potash Standard Vancouver FOB,252.66666666666663
2020-01-01,Potash Standard Vancouver FOB,248.4
2020-02-01,Potash Standard Vancouver FOB,246.0
2020-03-01,Potash Standard Vancouver FOB,241.75
2020-04-01,Potash Standard Vancouver FOB,241.4
2020-05-01,Potash Standard Vancouver FOB,221.25
2020-06-01,Potash Standard Vancouver FOB,216.0
2020-07-01,Potash Standard Vancouver FOB,214.2
2020-08-01,Potash Standard Vancouver FOB,212.75
2020-09-01,Potash Standard Vancouver FOB,210.75
2020-10-01,Potash Standard Vancouver FOB,210.0
2020-11-01,Potash Standard Vancouver FOB,209.75
2020-12-01,Potash Standard Vancouver FOB,208.5
2021-01-01,Potash Standard Vancouver FOB,206.5
2021-02-01,Potash Standard Vancouver FOB,211.75
2021-03-01,Potash Standard Vancouver FOB,206.25
2021-04-01,Potash Standard Vancouver FOB,214.8
2021-05-01,Potash Standard Vancouver FOB,216.75
2021-06-01,Potash Standard Vancouver FOB,229.5
2021-07-01,Potash Standard Vancouver FOB,258.4
2021-08-01,Potash Standard Vancouver FOB,305.75
2021-09-01,Potash Standard Vancouver FOB,346.2
2021-10-01,Potash Standard Vancouver FOB,358.0
2021-11-01,Potash Standard Vancouver FOB,381.75
2021-12-01,Potash Standard Vancouver FOB,390.75
2022-01-01,Potash Standard Vancouver FOB,391.5
2022-02-01,Potash Standard Vancouver FOB,464.5
2022-03-01,Potash Standard Vancouver FOB,605.0
2022-04-01,Potash Standard Vancouver FOB,705.0
2022-05-01,Potash Standard Vancouver FOB,699.25
2022-06-01,Potash Standard Vancouver FOB,706.0
2022-07-01,Potash Standard Vancouver FOB,713.0
2022-08-01,Potash Standard Vancouver FOB,691.5
2022-09-01,Potash Standard Vancouver FOB,677.4
2022-10-01,Potash Standard Vancouver FOB,667.25
2022-11-01,Potash Standard Vancouver FOB,609.25
2022-12-01,Potash Standard Vancouver FOB,532.0
2023-01-01,Potash Standard Vancouver FOB,517.5
2023-02-01,Potash Standard Vancouver FOB,506.5
2023-03-01,Potash Standard Vancouver FOB,483.4
2023-04-01,Potash Standard Vancouver FOB,470.0
2023-05-01,Potash Standard Vancouver FOB,465.0
2023-06-01,Potash Standard Vancouver FOB,360.4
2023-07-01,Potash Standard Vancouver FOB,327.75
2023-08-01,Potash Standard Vancouver FOB,312.6
2023-09-01,Potash Standard Vancouver FOB,274.5
2023-10-01,Potash Standard Vancouver FOB,278.5
2023-11-01,Potash Standard Vancouver FOB,285.0
2023-12-01,Potash Standard Vancouver FOB,285.6666666666667
2024-01-01,Potash Standard Vancouver FOB,285.25
2024-02-01,Potash Standard Vancouver FOB,275.2
2024-03-01,Potash Standard Vancouver FOB,264.5
2024-04-01,Potash Standard Vancouver FOB,264.0
2024-05-01,Potash Standard Vancouver FOB,261.8
2024-06-01,Potash Standard Vancouver FOB,262.0
2024-07-01,Potash Standard Vancouver FOB,247.5
2024-08-01,Potash Standard Vancouver FOB,243.2
2024-09-01,Potash Standard Vancouver FOB,244.75
2024-10-01,Potash Standard Vancouver FOB,252.0
2024-11-01,Potash Standard Vancouver FOB,255.5
2024-12-01,Potash Standard Vancouver FOB,260.0
2025-01-01,Potash Standard Vancouver FOB,262.2
2025-02-01,Potash Standard Vancouver FOB,268.25
2025-03-01,Potash Standard Vancouver FOB,268.75
2025-04-01,Potash Standard Vancouver FOB,278.5
2025-05-01,Potash Standard Vancouver FOB,285.0
2025-06-01,Potash Standard Vancouver FOB,309.5
2025-07-01,Potash Standard Vancouver FOB,329.0
2025-08-01,Potash Standard Vancouver FOB,331.0
2025-09-01,Potash Standard Vancouver FOB,333.25
2025-10-01,Potash Standard Vancouver FOB,334.0
2010-01-01,Potash Standard Southeast Asia CFR,399.75
2010-02-01,Potash Standard Southeast Asia CFR,396.75
2010-03-01,Potash Standard Southeast Asia CFR,399.5
2010-04-01,Potash Standard Southeast Asia CFR,402.4
2010-05-01,Potash Standard Southeast Asia CFR,403.0
2010-06-01,Potash Standard Southeast Asia CFR,404.25
2010-07-01,Potash Standard Southeast Asia CFR,401.6
2010-08-01,Potash Standard Southeast Asia CFR,400.0
2010-09-01,Potash Standard Southeast Asia CFR,394.0
2010-10-01,Potash Standard Southeast Asia CFR,399.75
2010-11-01,Potash Standard Southeast Asia CFR,406.75
2010-12-01,Potash Standard Southeast Asia CFR,418.0
2011-01-01,Potash Standard Southeast Asia CFR,440.0
2011-02-01,Potash Standard Southeast Asia CFR,441.25
2011-03-01,Potash Standard Southeast Asia CFR,449.0
2011-04-01,Potash Standard Southeast Asia CFR,485.0
2011-05-01,Potash Standard Southeast Asia CFR,485.0
2011-06-01,Potash Standard Southeast Asia CFR,505.0
2011-07-01,Potash Standard Southeast Asia CFR,505.0
2011-08-01,Potash Standard Southeast Asia CFR,505.0
2011-09-01,Potash Standard Southeast Asia CFR,506.0
2011-10-01,Potash Standard Southeast Asia CFR,523.0
2011-11-01,Potash Standard Southeast Asia CFR,535.0
2011-12-01,Potash Standard Southeast Asia CFR,535.0
2012-01-01,Potash Standard Southeast Asia CFR,535.0
2012-02-01,Potash Standard Southeast Asia CFR,535.0
2012-03-01,Potash Standard Southeast Asia CFR,535.0
2012-04-01,Potash Standard Southeast Asia CFR,528.0
2012-05-01,Potash Standard Southeast Asia CFR,521.0
2012-06-01,Potash Standard Southeast Asia CFR,518.0
2012-07-01,Potash Standard Southeast Asia CFR,518.0
2012-08-01,Potash Standard Southeast Asia CFR,518.0
2012-09-01,Potash Standard Southeast Asia CFR,515.75
2012-10-01,Potash Standard Southeast Asia CFR,492.5
2012-11-01,Potash Standard Southeast Asia CFR,470.0
2012-12-01,Potash Standard Southeast Asia CFR,455.0
2013-01-01,Potash Standard Southeast Asia CFR,435.0
2013-02-01,Potash Standard Southeast Asia CFR,436.5
2013-03-01,Potash Standard Southeast Asia CFR,442.5
2013-04-01,Potash Standard Southeast Asia CFR,445.0
2013-05-01,Potash Standard Southeast Asia CFR,445.0
2013-06-01,Potash Standard Southeast Asia CFR,445.0
2013-07-01,Potash Standard Southeast Asia CFR,445.0
2013-08-01,Potash Standard Southeast Asia CFR,418.0
2013-09-01,Potash Standard Southeast Asia CFR,380.0
2013-10-01,Potash Standard Southeast Asia CFR,357.0
2013-11-01,Potash Standard Southeast Asia CFR,328.75
2013-12-01,Potash Standard Southeast Asia CFR,316.0
2014-01-01,Potash Standard Southeast Asia CFR,316.8
2014-02-01,Potash Standard Southeast Asia CFR,321.25
2014-03-01,Potash Standard Southeast Asia CFR,328.75
2014-04-01,Potash Standard Southeast Asia CFR,323.75
2014-05-01,Potash Standard Southeast Asia CFR,319.0
2014-06-01,Potash Standard Southeast Asia CFR,315.0
2014-07-01,Potash Standard Southeast Asia CFR,315.0
2014-08-01,Potash Standard Southeast Asia CFR,310.0
2014-09-01,Potash Standard Southeast Asia CFR,320.0
2014-10-01,Potash Standard Southeast Asia CFR,325.2
2014-11-01,Potash Standard Southeast Asia CFR,328.25
2014-12-01,Potash Standard Southeast Asia CFR,334.75
2015-01-01,Potash Standard Southeast Asia CFR,331.2
2015-02-01,Potash Standard Southeast Asia CFR,325.0
2015-03-01,Potash Standard Southeast Asia CFR,325.25
2015-04-01,Potash Standard Southeast Asia CFR,330.0
2015-05-01,Potash Standard Southeast Asia CFR,330.75
2015-06-01,Potash Standard Southeast Asia CFR,324.0
2015-07-01,Potash Standard Southeast Asia CFR,317.0
2015-08-01,Potash Standard Southeast Asia CFR,317.25
2015-09-01,Potash Standard Southeast Asia CFR,310.75
2015-10-01,Potash Standard Southeast Asia CFR,310.4
2015-11-01,Potash Standard Southeast Asia CFR,299.75
2015-12-01,Potash Standard Southeast Asia CFR,291.6
2016-01-01,Potash Standard Southeast Asia CFR,281.5
2016-02-01,Potash Standard Southeast Asia CFR,270.25
2016-03-01,Potash Standard Southeast Asia CFR,264.6
2016-04-01,Potash Standard Southeast Asia CFR,259.5
2016-05-01,Potash Standard Southeast Asia CFR,244.5
2016-06-01,Potash Standard Southeast Asia CFR,234.0
2016-07-01,Potash Standard Southeast Asia CFR,236.5
2016-08-01,Potash Standard Southeast Asia CFR,235.0
2016-09-01,Potash Standard Southeast Asia CFR,235.0
2016-10-01,Potash Standard Southeast Asia CFR,236.25
2016-11-01,Potash Standard Southeast Asia CFR,235.0
2016-12-01,Potash Standard Southeast Asia CFR,235.0
2017-01-01,Potash Standard Southeast Asia CFR,235.0
2017-02-01,Potash Standard Southeast Asia CFR,235.0
2017-03-01,Potash Standard Southeast Asia CFR,238.0
2017-04-01,Potash Standard Southeast Asia CFR,238.0
2017-05-01,Potash Standard Southeast Asia CFR,239.5
2017-06-01,Potash Standard Southeast Asia CFR,240.0
2017-07-01,Potash Standard Southeast Asia CFR,240.0
2017-08-01,Potash Standard Southeast Asia CFR,240.0
2017-09-01,Potash Standard Southeast Asia CFR,240.0
2017-10-01,Potash Standard Southeast Asia CFR,248.5
2017-11-01,Potash Standard Southeast Asia CFR,250.6
2017-12-01,Potash Standard Southeast Asia CFR,253.0
2018-01-01,Potash Standard Southeast Asia CFR,258.0
2018-02-01,Potash Standard Southeast Asia CFR,258.0
2018-03-01,Potash Standard Southeast Asia CFR,266.0
2018-04-01,Potash Standard Southeast Asia CFR,269.5
2018-05-01,Potash Standard Southeast Asia CFR,275.0
2018-06-01,Potash Standard Southeast Asia CFR,280.0
2018-07-01,Potash Standard Southeast Asia CFR,280.0
2018-08-01,Potash Standard Southeast Asia CFR,280.6
2018-09-01,Potash Standard Southeast Asia CFR,284.5
2018-10-01,Potash Standard Southeast Asia CFR,292.5
2018-11-01,Potash Standard Southeast Asia CFR,303.0
2018-12-01,Potash Standard Southeast Asia CFR,303.0
2019-01-01,Potash Standard Southeast Asia CFR,303.0
2019-02-01,Potash Standard Southeast Asia CFR,303.0
2019-03-01,Potash Standard Southeast Asia CFR,303.0
2019-04-01,Potash Standard Southeast Asia CFR,303.0
2019-05-01,Potash Standard Southeast Asia CFR,300.0
2019-06-01,Potash Standard Southeast Asia CFR,300.0
2019-07-01,Potash Standard Southeast Asia CFR,298.75
2019-08-01,Potash Standard Southeast Asia CFR,291.0
2019-09-01,Potash Standard Southeast Asia CFR,288.75
2019-10-01,Potash Standard Southeast Asia CFR,282.6
2019-11-01,Potash Standard Southeast Asia CFR,275.75
2019-12-01,Potash Standard Southeast Asia CFR,273.3333333333333
2020-01-01,Potash Standard Southeast Asia CFR,266.6
2020-02-01,Potash Standard Southeast Asia CFR,256.25
2020-03-01,Potash Standard Southeast Asia CFR,250.75
2020-04-01,Potash Standard Southeast Asia CFR,247.8
2020-05-01,Potash Standard Southeast Asia CFR,241.25
2020-06-01,Potash Standard Southeast Asia CFR,240.0
2020-07-01,Potash Standard Southeast Asia CFR,240.0
2020-08-01,Potash Standard Southeast Asia CFR,240.0
2020-09-01,Potash Standard Southeast Asia CFR,240.0
2020-10-01,Potash Standard Southeast Asia CFR,240.0
2020-11-01,Potash Standard Southeast Asia CFR,239.5
2020-12-01,Potash Standard Southeast Asia CFR,240.0
2021-01-01,Potash Standard Southeast Asia CFR,242.5
2021-02-01,Potash Standard Southeast Asia CFR,247.25
2021-03-01,Potash Standard Southeast Asia CFR,255.75
2021-04-01,Potash Standard Southeast Asia CFR,265.2
2021-05-01,Potash Standard Southeast Asia CFR,280.0
2021-06-01,Potash Standard Southeast Asia CFR,302.5
2021-07-01,Potash Standard Southeast Asia CFR,364.0
2021-08-01,Potash Standard Southeast Asia CFR,455.0
2021-09-01,Potash Standard Southeast Asia CFR,528.0
2021-10-01,Potash Standard Southeast Asia CFR,556.25
2021-11-01,Potash Standard Southeast Asia CFR,581.25
2021-12-01,Potash Standard Southeast Asia CFR,596.25
2022-01-01,Potash Standard Southeast Asia CFR,600.0
2022-02-01,Potash Standard Southeast Asia CFR,602.5
2022-03-01,Potash Standard Southeast Asia CFR,743.0
2022-04-01,Potash Standard Southeast Asia CFR,925.0
2022-05-01,Potash Standard Southeast Asia CFR,925.0
2022-06-01,Potash Standard Southeast Asia CFR,935.4
2022-07-01,Potash Standard Southeast Asia CFR,922.0
2022-08-01,Potash Standard Southeast Asia CFR,875.0
2022-09-01,Potash Standard Southeast Asia CFR,833.0
2022-10-01,Potash Standard Southeast Asia CFR,787.5
2022-11-01,Potash Standard Southeast Asia CFR,676.25
2022-12-01,Potash Standard Southeast Asia CFR,560.25
2023-01-01,Potash Standard Southeast Asia CFR,525.0
2023-02-01,Potash Standard Southeast Asia CFR,503.75
2023-03-01,Potash Standard Southeast Asia CFR,462.0
2023-04-01,Potash Standard Southeast Asia CFR,429.0
2023-05-01,Potash Standard Southeast Asia CFR,408.75
2023-06-01,Potash Standard Southeast Asia CFR,361.2
2023-07-01,Potash Standard Southeast Asia CFR,311.5
2023-08-01,Potash Standard Southeast Asia CFR,306.0
2023-09-01,Potash Standard Southeast Asia CFR,311.25
2023-10-01,Potash Standard Southeast Asia CFR,315.0
2023-11-01,Potash Standard Southeast Asia CFR,319.0
2023-12-01,Potash Standard Southeast Asia CFR,320.0
2024-01-01,Potash Standard Southeast Asia CFR,317.5
2024-02-01,Potash Standard Southeast Asia CFR,307.4
2024-03-01,Potash Standard Southeast Asia CFR,303.0
2024-04-01,Potash Standard Southeast Asia CFR,297.75
2024-05-01,Potash Standard Southeast Asia CFR,290.0
2024-06-01,Potash Standard Southeast Asia CFR,287.5
2024-07-01,Potash Standard Southeast Asia CFR,282.0
2024-08-01,Potash Standard Southeast Asia CFR,283.2
2024-09-01,Potash Standard Southeast Asia CFR,285.0
2024-10-01,Potash Standard Southeast Asia CFR,290.0
2024-11-01,Potash Standard Southeast Asia CFR,291.75
2024-12-01,Potash Standard Southeast Asia CFR,295.0
2025-01-01,Potash Standard Southeast Asia CFR,300.0
2025-02-01,Potash Standard Southeast Asia CFR,308.75
2025-03-01,Potash Standard Southeast Asia CFR,314.5
2025-04-01,Potash Standard Southeast Asia CFR,334.0
2025-05-01,Potash Standard Southeast Asia CFR,345.0
2025-06-01,Potash Standard Southeast Asia CFR,349.0
2025-07-01,Potash Standard Southeast Asia CFR,364.2
2025-08-01,Potash Standard Southeast Asia CFR,372.0
2025-09-01,Potash Standard Southeast Asia CFR,374.25
2025-10-01,Potash Standard Southeast Asia CFR,375.0
2010-01-01,Sulphur Middle East FOB,122.75
2010-02-01,Sulphur Middle East FOB,167.0
2010-03-01,Sulphur Middle East FOB,181.0
2010-04-01,Sulphur Middle East FOB,178.6
2010-05-01,Sulphur Middle East FOB,121.5
2010-06-01,Sulphur Middle East FOB,80.75
2010-07-01,Sulphur Middle East FOB,66.6
2010-08-01,Sulphur Middle East FOB,123.0
2010-09-01,Sulphur Middle East FOB,148.4
2010-10-01,Sulphur Middle East FOB,165.25
2010-11-01,Sulphur Middle East FOB,172.5
2010-12-01,Sulphur Middle East FOB,159.0
2011-01-01,Sulphur Middle East FOB,156.25
2011-02-01,Sulphur Middle East FOB,184.75
2011-03-01,Sulphur Middle East FOB,196.8
2011-04-01,Sulphur Middle East FOB,200.25
2011-05-01,Sulphur Middle East FOB,212.0
2011-06-01,Sulphur Middle East FOB,220.0
2011-07-01,Sulphur Middle East FOB,199.5
2011-08-01,Sulphur Middle East FOB,202.5
2011-09-01,Sulphur Middle East FOB,215.0
2011-10-01,Sulphur Middle East FOB,215.75
2011-11-01,Sulphur Middle East FOB,204.75
2011-12-01,Sulphur Middle East FOB,190.8
2012-01-01,Sulphur Middle East FOB,174.25
2012-02-01,Sulphur Middle East FOB,168.5
2012-03-01,Sulphur Middle East FOB,186.0
2012-04-01,Sulphur Middle East FOB,191.5
2012-05-01,Sulphur Middle East FOB,200.0
2012-06-01,Sulphur Middle East FOB,187.5
2012-07-01,Sulphur Middle East FOB,176.25
2012-08-01,Sulphur Middle East FOB,177.6
2012-09-01,Sulphur Middle East FOB,186.5
2012-10-01,Sulphur Middle East FOB,170.75
2012-11-01,Sulphur Middle East FOB,154.2
2012-12-01,Sulphur Middle East FOB,146.5
2013-01-01,Sulphur Middle East FOB,145.2
2013-02-01,Sulphur Middle East FOB,149.0
2013-03-01,Sulphur Middle East FOB,150.0
2013-04-01,Sulphur Middle East FOB,151.0
2013-05-01,Sulphur Middle East FOB,140.6
2013-06-01,Sulphur Middle East FOB,112.25
2013-07-01,Sulphur Middle East FOB,67.5
2013-08-01,Sulphur Middle East FOB,64.0
2013-09-01,Sulphur Middle East FOB,68.0
2013-10-01,Sulphur Middle East FOB,66.6
2013-11-01,Sulphur Middle East FOB,90.25
2013-12-01,Sulphur Middle East FOB,118.25
2014-01-01,Sulphur Middle East FOB,144.2
2014-02-01,Sulphur Middle East FOB,186.0
2014-03-01,Sulphur Middle East FOB,183.5
2014-04-01,Sulphur Middle East FOB,139.5
2014-05-01,Sulphur Middle East FOB,134.4
2014-06-01,Sulphur Middle East FOB,154.0
2014-07-01,Sulphur Middle East FOB,164.6
2014-08-01,Sulphur Middle East FOB,164.0
2014-09-01,Sulphur Middle East FOB,154.0
2014-10-01,Sulphur Middle East FOB,142.6
2014-11-01,Sulphur Middle East FOB,129.5
2014-12-01,Sulphur Middle East FOB,151.0
2015-01-01,Sulphur Middle East FOB,169.8
2015-02-01,Sulphur Middle East FOB,176.5
2015-03-01,Sulphur Middle East FOB,168.25
2015-04-01,Sulphur Middle East FOB,149.4
2015-05-01,Sulphur Middle East FOB,140.75
2015-06-01,Sulphur Middle East FOB,143.0
2015-07-01,Sulphur Middle East FOB,150.4
2015-08-01,Sulphur Middle East FOB,153.0
2015-09-01,Sulphur Middle East FOB,133.5
2015-10-01,Sulphur Middle East FOB,113.8
2015-11-01,Sulphur Middle East FOB,126.5
2015-12-01,Sulphur Middle East FOB,132.0
2016-01-01,Sulphur Middle East FOB,118.75
2016-02-01,Sulphur Middle East FOB,96.0
2016-03-01,Sulphur Middle East FOB,85.0
2016-04-01,Sulphur Middle East FOB,83.0
2016-05-01,Sulphur Middle East FOB,83.0
2016-06-01,Sulphur Middle East FOB,81.8
2016-07-01,Sulphur Middle East FOB,74.5
2016-08-01,Sulphur Middle East FOB,69.25
2016-09-01,Sulphur Middle East FOB,77.0
2016-10-01,Sulphur Middle East FOB,78.5
2016-11-01,Sulphur Middle East FOB,84.75
2016-12-01,Sulphur Middle East FOB,91.0
2017-01-01,Sulphur Middle East FOB,89.5
2017-02-01,Sulphur Middle East FOB,88.0
2017-03-01,Sulphur Middle East FOB,87.4
2017-04-01,Sulphur Middle East FOB,80.5
2017-05-01,Sulphur Middle East FOB,75.5
2017-06-01,Sulphur Middle East FOB,80.0
2017-07-01,Sulphur Middle East FOB,88.25
2017-08-01,Sulphur Middle East FOB,103.8
2017-09-01,Sulphur Middle East FOB,109.5
2017-10-01,Sulphur Middle East FOB,137.25
2017-11-01,Sulphur Middle East FOB,191.8
2017-12-01,Sulphur Middle East FOB,163.33333333333334
2018-01-01,Sulphur Middle East FOB,133.0
2018-02-01,Sulphur Middle East FOB,121.5
2018-03-01,Sulphur Middle East FOB,125.0
2018-04-01,Sulphur Middle East FOB,115.0
2018-05-01,Sulphur Middle East FOB,126.6
2018-06-01,Sulphur Middle East FOB,133.0
2018-07-01,Sulphur Middle East FOB,134.25
2018-08-01,Sulphur Middle East FOB,140.4
2018-09-01,Sulphur Middle East FOB,157.75
2018-10-01,Sulphur Middle East FOB,170.25
2018-11-01,Sulphur Middle East FOB,157.0
2018-12-01,Sulphur Middle East FOB,127.66666666666669
2019-01-01,Sulphur Middle East FOB,113.2
2019-02-01,Sulphur Middle East FOB,103.0
2019-03-01,Sulphur Middle East FOB,102.75
2019-04-01,Sulphur Middle East FOB,103.0
2019-05-01,Sulphur Middle East FOB,103.0
2019-06-01,Sulphur Middle East FOB,102.5
2019-07-01,Sulphur Middle East FOB,95.25
2019-08-01,Sulphur Middle East FOB,73.0
2019-09-01,Sulphur Middle East FOB,56.0
2019-10-01,Sulphur Middle East FOB,47.2
2019-11-01,Sulphur Middle East FOB,43.0
2019-12-01,Sulphur Middle East FOB,40.66666666666666
2020-01-01,Sulphur Middle East FOB,40.2
2020-02-01,Sulphur Middle East FOB,42.0
2020-03-01,Sulphur Middle East FOB,53.0
2020-04-01,Sulphur Middle East FOB,58.6
2020-05-01,Sulphur Middle East FOB,53.0
2020-06-01,Sulphur Middle East FOB,59.5
2020-07-01,Sulphur Middle East FOB,57.4
2020-08-01,Sulphur Middle East FOB,52.75
2020-09-01,Sulphur Middle East FOB,63.0
2020-10-01,Sulphur Middle East FOB,70.8
2020-11-01,Sulphur Middle East FOB,77.25
2020-12-01,Sulphur Middle East FOB,91.25
2021-01-01,Sulphur Middle East FOB,110.25
2021-02-01,Sulphur Middle East FOB,152.0
2021-03-01,Sulphur Middle East FOB,188.25
2021-04-01,Sulphur Middle East FOB,185.0
2021-05-01,Sulphur Middle East FOB,185.0
2021-06-01,Sulphur Middle East FOB,186.0
2021-07-01,Sulphur Middle East FOB,175.2
2021-08-01,Sulphur Middle East FOB,169.75
2021-09-01,Sulphur Middle East FOB,181.6
2021-10-01,Sulphur Middle East FOB,207.5
2021-11-01,Sulphur Middle East FOB,245.0
2021-12-01,Sulphur Middle East FOB,273.25
2022-01-01,Sulphur Middle East FOB,303.75
2022-02-01,Sulphur Middle East FOB,313.75
2022-03-01,Sulphur Middle East FOB,393.0
2022-04-01,Sulphur Middle East FOB,453.75
2022-05-01,Sulphur Middle East FOB,469.75
2022-06-01,Sulphur Middle East FOB,463.8
2022-07-01,Sulphur Middle East FOB,260.0
2022-08-01,Sulphur Middle East FOB,78.5
2022-09-01,Sulphur Middle East FOB,95.8
2022-10-01,Sulphur Middle East FOB,118.75
2022-11-01,Sulphur Middle East FOB,168.75
2022-12-01,Sulphur Middle East FOB,177.75
2023-01-01,Sulphur Middle East FOB,141.25
2023-02-01,Sulphur Middle East FOB,128.25
2023-03-01,Sulphur Middle East FOB,125.6
2023-04-01,Sulphur Middle East FOB,96.5
2023-05-01,Sulphur Middle East FOB,85.0
2023-06-01,Sulphur Middle East FOB,73.8
2023-07-01,Sulphur Middle East FOB,69.5
2023-08-01,Sulphur Middle East FOB,91.6
2023-09-01,Sulphur Middle East FOB,107.25
2023-10-01,Sulphur Middle East FOB,107.75
2023-11-01,Sulphur Middle East FOB,92.8
2023-12-01,Sulphur Middle East FOB,79.66666666666667
2024-01-01,Sulphur Middle East FOB,72.75
2024-02-01,Sulphur Middle East FOB,71.0
2024-03-01,Sulphur Middle East FOB,81.0
2024-04-01,Sulphur Middle East FOB,86.25
2024-05-01,Sulphur Middle East FOB,83.2
2024-06-01,Sulphur Middle East FOB,79.0
2024-07-01,Sulphur Middle East FOB,89.25
2024-08-01,Sulphur Middle East FOB,116.8
2024-09-01,Sulphur Middle East FOB,127.0
2024-10-01,Sulphur Middle East FOB,132.4
2024-11-01,Sulphur Middle East FOB,147.0
2024-12-01,Sulphur Middle East FOB,165.33333333333334
2025-01-01,Sulphur Middle East FOB,165.0
2025-02-01,Sulphur Middle East FOB,183.0
2025-03-01,Sulphur Middle East FOB,256.5
2025-04-01,Sulphur Middle East FOB,280.0
2025-05-01,Sulphur Middle East FOB,295.0
2025-06-01,Sulphur Middle East FOB,276.25
2025-07-01,Sulphur Middle East FOB,260.0
2025-08-01,Sulphur Middle East FOB,274.75
2025-09-01,Sulphur Middle East FOB,307.75
2025-10-01,Sulphur Middle East FOB,359.8
2010-01-01,Sulphur India ex Middle East CFR,133.5
2010-02-01,Sulphur India ex Middle East CFR,194.0
2010-03-01,Sulphur India ex Middle East CFR,221.5
2010-04-01,Sulphur India ex Middle East CFR,188.2
2010-05-01,Sulphur India ex Middle East CFR,148.25
2010-06-01,Sulphur India ex Middle East CFR,107.75
2010-07-01,Sulphur India ex Middle East CFR,90.0
2010-08-01,Sulphur India ex Middle East CFR,137.5
2010-09-01,Sulphur India ex Middle East CFR,180.8
2010-10-01,Sulphur India ex Middle East CFR,192.5
2010-11-01,Sulphur India ex Middle East CFR,193.75
2010-12-01,Sulphur India ex Middle East CFR,189.0
2011-01-01,Sulphur India ex Middle East CFR,187.25
2011-02-01,Sulphur India ex Middle East CFR,204.75
2011-03-01,Sulphur India ex Middle East CFR,226.2
2011-04-01,Sulphur India ex Middle East CFR,239.75
2011-05-01,Sulphur India ex Middle East CFR,243.0
2011-06-01,Sulphur India ex Middle East CFR,239.8
2011-07-01,Sulphur India ex Middle East CFR,230.0
2011-08-01,Sulphur India ex Middle East CFR,232.75
2011-09-01,Sulphur India ex Middle East CFR,237.8
2011-10-01,Sulphur India ex Middle East CFR,239.0
2011-11-01,Sulphur India ex Middle East CFR,234.5
2011-12-01,Sulphur India ex Middle East CFR,205.8
2012-01-01,Sulphur India ex Middle East CFR,190.0
2012-02-01,Sulphur India ex Middle East CFR,187.5
2012-03-01,Sulphur India ex Middle East CFR,195.6
2012-04-01,Sulphur India ex Middle East CFR,217.5
2012-05-01,Sulphur India ex Middle East CFR,230.0
2012-06-01,Sulphur India ex Middle East CFR,216.5
2012-07-01,Sulphur India ex Middle East CFR,205.75
2012-08-01,Sulphur India ex Middle East CFR,205.6
2012-09-01,Sulphur India ex Middle East CFR,205.0
2012-10-01,Sulphur India ex Middle East CFR,196.0
2012-11-01,Sulphur India ex Middle East CFR,174.8
2012-12-01,Sulphur India ex Middle East CFR,170.0
2013-01-01,Sulphur India ex Middle East CFR,169.6
2013-02-01,Sulphur India ex Middle East CFR,163.0
2013-03-01,Sulphur India ex Middle East CFR,166.5
2013-04-01,Sulphur India ex Middle East CFR,167.25
2013-05-01,Sulphur India ex Middle East CFR,160.8
2013-06-01,Sulphur India ex Middle East CFR,133.0
2013-07-01,Sulphur India ex Middle East CFR,109.0
2013-08-01,Sulphur India ex Middle East CFR,87.6
2013-09-01,Sulphur India ex Middle East CFR,90.0
2013-10-01,Sulphur India ex Middle East CFR,95.0
2013-11-01,Sulphur India ex Middle East CFR,112.75
2013-12-01,Sulphur India ex Middle East CFR,142.25
2014-01-01,Sulphur India ex Middle East CFR,168.4
2014-02-01,Sulphur India ex Middle East CFR,202.5
2014-03-01,Sulphur India ex Middle East CFR,201.25
2014-04-01,Sulphur India ex Middle East CFR,162.0
2014-05-01,Sulphur India ex Middle East CFR,154.8
2014-06-01,Sulphur India ex Middle East CFR,178.5
2014-07-01,Sulphur India ex Middle East CFR,186.0
2014-08-01,Sulphur India ex Middle East CFR,187.5
2014-09-01,Sulphur India ex Middle East CFR,169.0
2014-10-01,Sulphur India ex Middle East CFR,159.0
2014-11-01,Sulphur India ex Middle East CFR,149.5
2014-12-01,Sulphur India ex Middle East CFR,168.75
2015-01-01,Sulphur India ex Middle East CFR,188.2
2015-02-01,Sulphur India ex Middle East CFR,195.0
2015-03-01,Sulphur India ex Middle East CFR,181.0
2015-04-01,Sulphur India ex Middle East CFR,165.0
2015-05-01,Sulphur India ex Middle East CFR,165.0
2015-06-01,Sulphur India ex Middle East CFR,161.5
2015-07-01,Sulphur India ex Middle East CFR,169.0
2015-08-01,Sulphur India ex Middle East CFR,169.75
2015-09-01,Sulphur India ex Middle East CFR,145.25
2015-10-01,Sulphur India ex Middle East CFR,133.0
2015-11-01,Sulphur India ex Middle East CFR,143.0
2015-12-01,Sulphur India ex Middle East CFR,143.0
2016-01-01,Sulphur India ex Middle East CFR,132.0
2016-02-01,Sulphur India ex Middle East CFR,111.0
2016-03-01,Sulphur India ex Middle East CFR,100.0
2016-04-01,Sulphur India ex Middle East CFR,98.0
2016-05-01,Sulphur India ex Middle East CFR,98.0
2016-06-01,Sulphur India ex Middle East CFR,97.0
2016-07-01,Sulphur India ex Middle East CFR,85.75
2016-08-01,Sulphur India ex Middle East CFR,83.0
2016-09-01,Sulphur India ex Middle East CFR,92.0
2016-10-01,Sulphur India ex Middle East CFR,93.25
2016-11-01,Sulphur India ex Middle East CFR,97.25
2016-12-01,Sulphur India ex Middle East CFR,105.0
2017-01-01,Sulphur India ex Middle East CFR,108.0
2017-02-01,Sulphur India ex Middle East CFR,105.0
2017-03-01,Sulphur India ex Middle East CFR,107.0
2017-04-01,Sulphur India ex Middle East CFR,97.25
2017-05-01,Sulphur India ex Middle East CFR,91.0
2017-06-01,Sulphur India ex Middle East CFR,96.6
2017-07-01,Sulphur India ex Middle East CFR,102.25
2017-08-01,Sulphur India ex Middle East CFR,117.8
2017-09-01,Sulphur India ex Middle East CFR,129.0
2017-10-01,Sulphur India ex Middle East CFR,154.5
2017-11-01,Sulphur India ex Middle East CFR,213.0
2017-12-01,Sulphur India ex Middle East CFR,185.0
2018-01-01,Sulphur India ex Middle East CFR,153.75
2018-02-01,Sulphur India ex Middle East CFR,142.5
2018-03-01,Sulphur India ex Middle East CFR,149.0
2018-04-01,Sulphur India ex Middle East CFR,136.25
2018-05-01,Sulphur India ex Middle East CFR,144.4
2018-06-01,Sulphur India ex Middle East CFR,149.25
2018-07-01,Sulphur India ex Middle East CFR,155.0
2018-08-01,Sulphur India ex Middle East CFR,158.4
2018-09-01,Sulphur India ex Middle East CFR,172.0
2018-10-01,Sulphur India ex Middle East CFR,188.75
2018-11-01,Sulphur India ex Middle East CFR,178.0
2018-12-01,Sulphur India ex Middle East CFR,153.0
2019-01-01,Sulphur India ex Middle East CFR,140.0
2019-02-01,Sulphur India ex Middle East CFR,123.5
2019-03-01,Sulphur India ex Middle East CFR,118.0
2019-04-01,Sulphur India ex Middle East CFR,118.0
2019-05-01,Sulphur India ex Middle East CFR,118.0
2019-06-01,Sulphur India ex Middle East CFR,118.0
2019-07-01,Sulphur India ex Middle East CFR,114.75
2019-08-01,Sulphur India ex Middle East CFR,95.2
2019-09-01,Sulphur India ex Middle East CFR,81.5
2019-10-01,Sulphur India ex Middle East CFR,68.0
2019-11-01,Sulphur India ex Middle East CFR,63.0
2019-12-01,Sulphur India ex Middle East CFR,58.0
2020-01-01,Sulphur India ex Middle East CFR,63.0
2020-02-01,Sulphur India ex Middle East CFR,63.0
2020-03-01,Sulphur India ex Middle East CFR,68.0
2020-04-01,Sulphur India ex Middle East CFR,77.0
2020-05-01,Sulphur India ex Middle East CFR,73.0
2020-06-01,Sulphur India ex Middle East CFR,76.75
2020-07-01,Sulphur India ex Middle East CFR,79.4
2020-08-01,Sulphur India ex Middle East CFR,73.0
2020-09-01,Sulphur India ex Middle East CFR,82.25
2020-10-01,Sulphur India ex Middle East CFR,85.0
2020-11-01,Sulphur India ex Middle East CFR,99.75
2020-12-01,Sulphur India ex Middle East CFR,110.5
2021-01-01,Sulphur India ex Middle East CFR,127.5
2021-02-01,Sulphur India ex Middle East CFR,167.5
2021-03-01,Sulphur India ex Middle East CFR,230.0
2021-04-01,Sulphur India ex Middle East CFR,223.6
2021-05-01,Sulphur India ex Middle East CFR,219.0
2021-06-01,Sulphur India ex Middle East CFR,228.0
2021-07-01,Sulphur India ex Middle East CFR,223.4
2021-08-01,Sulphur India ex Middle East CFR,215.0
2021-09-01,Sulphur India ex Middle East CFR,235.4
2021-10-01,Sulphur India ex Middle East CFR,267.5
2021-11-01,Sulphur India ex Middle East CFR,280.0
2021-12-01,Sulphur India ex Middle East CFR,298.5
2022-01-01,Sulphur India ex Middle East CFR,321.5
2022-02-01,Sulphur India ex Middle East CFR,345.0
2022-03-01,Sulphur India ex Middle East CFR,404.0
2022-04-01,Sulphur India ex Middle East CFR,490.0
2022-05-01,Sulphur India ex Middle East CFR,497.5
2022-06-01,Sulphur India ex Middle East CFR,504.0
2022-07-01,Sulphur India ex Middle East CFR,303.75
2022-08-01,Sulphur India ex Middle East CFR,112.5
2022-09-01,Sulphur India ex Middle East CFR,121.0
2022-10-01,Sulphur India ex Middle East CFR,147.5
2022-11-01,Sulphur India ex Middle East CFR,182.5
2022-12-01,Sulphur India ex Middle East CFR,192.5
2023-01-01,Sulphur India ex Middle East CFR,166.25
2023-02-01,Sulphur India ex Middle East CFR,149.75
2023-03-01,Sulphur India ex Middle East CFR,150.0
2023-04-01,Sulphur India ex Middle East CFR,122.5
2023-05-01,Sulphur India ex Middle East CFR,110.0
2023-06-01,Sulphur India ex Middle East CFR,97.8
2023-07-01,Sulphur India ex Middle East CFR,88.0
2023-08-01,Sulphur India ex Middle East CFR,111.8
2023-09-01,Sulphur India ex Middle East CFR,124.25
2023-10-01,Sulphur India ex Middle East CFR,129.75
2023-11-01,Sulphur India ex Middle East CFR,115.0
2023-12-01,Sulphur India ex Middle East CFR,102.33333333333331
2024-01-01,Sulphur India ex Middle East CFR,98.0
2024-02-01,Sulphur India ex Middle East CFR,99.4
2024-03-01,Sulphur India ex Middle East CFR,103.0
2024-04-01,Sulphur India ex Middle East CFR,106.0
2024-05-01,Sulphur India ex Middle East CFR,107.0
2024-06-01,Sulphur India ex Middle East CFR,104.75
2024-07-01,Sulphur India ex Middle East CFR,111.0
2024-08-01,Sulphur India ex Middle East CFR,145.0
2024-09-01,Sulphur India ex Middle East CFR,148.0
2024-10-01,Sulphur India ex Middle East CFR,145.0
2024-11-01,Sulphur India ex Middle East CFR,156.5
2024-12-01,Sulphur India ex Middle East CFR,180.33333333333331
2025-01-01,Sulphur India ex Middle East CFR,180.4
2025-02-01,Sulphur India ex Middle East CFR,191.0
2025-03-01,Sulphur India ex Middle East CFR,256.25
2025-04-01,Sulphur India ex Middle East CFR,295.0
2025-05-01,Sulphur India ex Middle East CFR,302.0
2025-06-01,Sulphur India ex Middle East CFR,299.5
2025-07-01,Sulphur India ex Middle East CFR,281.8
2025-08-01,Sulphur India ex Middle East CFR,283.5
2025-09-01,Sulphur India ex Middle East CFR,322.0
2025-10-01,Sulphur India ex Middle East CFR,376.6
2022-06-01,Sulphur Indonesia CFR,497.5
2022-07-01,Sulphur Indonesia CFR,305.0
2022-08-01,Sulphur Indonesia CFR,110.0
2022-09-01,Sulphur Indonesia CFR,126.0
2022-10-01,Sulphur Indonesia CFR,148.25
2022-11-01,Sulphur Indonesia CFR,198.75
2022-12-01,Sulphur Indonesia CFR,203.75
2023-01-01,Sulphur Indonesia CFR,168.75
2023-02-01,Sulphur Indonesia CFR,151.0
2023-03-01,Sulphur Indonesia CFR,164.0
2023-04-01,Sulphur Indonesia CFR,125.75
2023-05-01,Sulphur Indonesia CFR,110.0
2023-06-01,Sulphur Indonesia CFR,98.2
2023-07-01,Sulphur Indonesia CFR,86.0
2023-08-01,Sulphur Indonesia CFR,115.0
2023-09-01,Sulphur Indonesia CFR,126.0
2023-10-01,Sulphur Indonesia CFR,131.5
2023-11-01,Sulphur Indonesia CFR,113.8
2023-12-01,Sulphur Indonesia CFR,103.0
2024-01-01,Sulphur Indonesia CFR,98.5
2024-02-01,Sulphur Indonesia CFR,99.4
2024-03-01,Sulphur Indonesia CFR,105.0
2024-04-01,Sulphur Indonesia CFR,112.5
2024-05-01,Sulphur Indonesia CFR,109.6
2024-06-01,Sulphur Indonesia CFR,104.75
2024-07-01,Sulphur Indonesia CFR,111.5
2024-08-01,Sulphur Indonesia CFR,141.0
2024-09-01,Sulphur Indonesia CFR,143.75
2024-10-01,Sulphur Indonesia CFR,147.4
2024-11-01,Sulphur Indonesia CFR,166.0
2024-12-01,Sulphur Indonesia CFR,183.0
2025-01-01,Sulphur Indonesia CFR,183.6
2025-02-01,Sulphur Indonesia CFR,197.75
2025-03-01,Sulphur Indonesia CFR,271.5
2025-04-01,Sulphur Indonesia CFR,298.0
2025-05-01,Sulphur Indonesia CFR,310.2
2025-06-01,Sulphur Indonesia CFR,290.75
2025-07-01,Sulphur Indonesia CFR,280.0
2025-08-01,Sulphur Indonesia CFR,286.5
2025-09-01,Sulphur Indonesia CFR,325.25
2025-10-01,Sulphur Indonesia CFR,381.4
2012-07-01,Sulphuric Acid Japan/South Korea FOB,39.0
2012-08-01,Sulphuric Acid Japan/South Korea FOB,43.0
2012-09-01,Sulphuric Acid Japan/South Korea FOB,45.0
2012-10-01,Sulphuric Acid Japan/South Korea FOB,38.25
2012-11-01,Sulphuric Acid Japan/South Korea FOB,18.0
2012-12-01,Sulphuric Acid Japan/South Korea FOB,10.0
2013-01-01,Sulphuric Acid Japan/South Korea FOB,7.2
2013-02-01,Sulphuric Acid Japan/South Korea FOB,3.0
2013-03-01,Sulphuric Acid Japan/South Korea FOB,3.0
2013-04-01,Sulphuric Acid Japan/South Korea FOB,3.0
2013-05-01,Sulphuric Acid Japan/South Korea FOB,8.6
2013-06-01,Sulphuric Acid Japan/South Korea FOB,3.0
2013-07-01,Sulphuric Acid Japan/South Korea FOB,3.0
2013-08-01,Sulphuric Acid Japan/South Korea FOB,3.0
2013-09-01,Sulphuric Acid Japan/South Korea FOB,3.0
2013-10-01,Sulphuric Acid Japan/South Korea FOB,3.0
2013-11-01,Sulphuric Acid Japan/South Korea FOB,3.0
2013-12-01,Sulphuric Acid Japan/South Korea FOB,3.0
2014-01-01,Sulphuric Acid Japan/South Korea FOB,3.0
2014-02-01,Sulphuric Acid Japan/South Korea FOB,6.75
2014-03-01,Sulphuric Acid Japan/South Korea FOB,8.0
2014-04-01,Sulphuric Acid Japan/South Korea FOB,8.0
2014-05-01,Sulphuric Acid Japan/South Korea FOB,8.0
2014-06-01,Sulphuric Acid Japan/South Korea FOB,8.0
2014-07-01,Sulphuric Acid Japan/South Korea FOB,8.0
2014-08-01,Sulphuric Acid Japan/South Korea FOB,8.0
2014-09-01,Sulphuric Acid Japan/South Korea FOB,11.5
2014-10-01,Sulphuric Acid Japan/South Korea FOB,13.0
2014-11-01,Sulphuric Acid Japan/South Korea FOB,15.0
2014-12-01,Sulphuric Acid Japan/South Korea FOB,12.5
2015-01-01,Sulphuric Acid Japan/South Korea FOB,10.6
2015-02-01,Sulphuric Acid Japan/South Korea FOB,16.25
2015-03-01,Sulphuric Acid Japan/South Korea FOB,19.0
2015-04-01,Sulphuric Acid Japan/South Korea FOB,20.0
2015-05-01,Sulphuric Acid Japan/South Korea FOB,20.25
2015-06-01,Sulphuric Acid Japan/South Korea FOB,25.0
2015-07-01,Sulphuric Acid Japan/South Korea FOB,20.0
2015-08-01,Sulphuric Acid Japan/South Korea FOB,15.0
2015-09-01,Sulphuric Acid Japan/South Korea FOB,18.0
2015-10-01,Sulphuric Acid Japan/South Korea FOB,15.4
2015-11-01,Sulphuric Acid Japan/South Korea FOB,8.75
2015-12-01,Sulphuric Acid Japan/South Korea FOB,5.0
2016-01-01,Sulphuric Acid Japan/South Korea FOB,5.0
2016-02-01,Sulphuric Acid Japan/South Korea FOB,2.5
2016-03-01,Sulphuric Acid Japan/South Korea FOB,-3.6
2016-04-01,Sulphuric Acid Japan/South Korea FOB,-5.0
2016-05-01,Sulphuric Acid Japan/South Korea FOB,-5.0
2016-06-01,Sulphuric Acid Japan/South Korea FOB,-5.0
2016-07-01,Sulphuric Acid Japan/South Korea FOB,-3.0
2016-08-01,Sulphuric Acid Japan/South Korea FOB,0.0
2016-09-01,Sulphuric Acid Japan/South Korea FOB,1.2
2016-10-01,Sulphuric Acid Japan/South Korea FOB,1.5
2016-11-01,Sulphuric Acid Japan/South Korea FOB,0.0
2016-12-01,Sulphuric Acid Japan/South Korea FOB,-1.8
2017-01-01,Sulphuric Acid Japan/South Korea FOB,-3.0
2017-02-01,Sulphuric Acid Japan/South Korea FOB,-3.0
2017-03-01,Sulphuric Acid Japan/South Korea FOB,-0.6
2017-04-01,Sulphuric Acid Japan/South Korea FOB,7.25
2017-05-01,Sulphuric Acid Japan/South Korea FOB,11.75
2017-06-01,Sulphuric Acid Japan/South Korea FOB,13.0
2017-07-01,Sulphuric Acid Japan/South Korea FOB,13.5
2017-08-01,Sulphuric Acid Japan/South Korea FOB,15.0
2017-09-01,Sulphuric Acid Japan/South Korea FOB,15.0
2017-10-01,Sulphuric Acid Japan/South Korea FOB,14.5
2017-11-01,Sulphuric Acid Japan/South Korea FOB,11.8
2017-12-01,Sulphuric Acid Japan/South Korea FOB,14.333333333333334
2018-01-01,Sulphuric Acid Japan/South Korea FOB,17.25
2018-02-01,Sulphuric Acid Japan/South Korea FOB,18.5
2018-03-01,Sulphuric Acid Japan/South Korea FOB,20.0
2018-04-01,Sulphuric Acid Japan/South Korea FOB,20.0
2018-05-01,Sulphuric Acid Japan/South Korea FOB,25.6
2018-06-01,Sulphuric Acid Japan/South Korea FOB,31.5
2018-07-01,Sulphuric Acid Japan/South Korea FOB,33.0
2018-08-01,Sulphuric Acid Japan/South Korea FOB,33.0
2018-09-01,Sulphuric Acid Japan/South Korea FOB,34.75
2018-10-01,Sulphuric Acid Japan/South Korea FOB,43.5
2018-11-01,Sulphuric Acid Japan/South Korea FOB,48.0
2018-12-01,Sulphuric Acid Japan/South Korea FOB,48.0
2019-01-01,Sulphuric Acid Japan/South Korea FOB,44.8
2019-02-01,Sulphuric Acid Japan/South Korea FOB,40.0
2019-03-01,Sulphuric Acid Japan/South Korea FOB,37.5
2019-04-01,Sulphuric Acid Japan/South Korea FOB,32.75
2019-05-01,Sulphuric Acid Japan/South Korea FOB,27.0
2019-06-01,Sulphuric Acid Japan/South Korea FOB,15.5
2019-07-01,Sulphuric Acid Japan/South Korea FOB,13.0
2019-08-01,Sulphuric Acid Japan/South Korea FOB,13.0
2019-09-01,Sulphuric Acid Japan/South Korea FOB,9.5
2019-10-01,Sulphuric Acid Japan/South Korea FOB,9.0
2019-11-01,Sulphuric Acid Japan/South Korea FOB,8.25
2019-12-01,Sulphuric Acid Japan/South Korea FOB,8.0
2020-01-01,Sulphuric Acid Japan/South Korea FOB,5.2
2020-02-01,Sulphuric Acid Japan/South Korea FOB,-2.5
2020-03-01,Sulphuric Acid Japan/South Korea FOB,-16.5
2020-04-01,Sulphuric Acid Japan/South Korea FOB,-26.4
2020-05-01,Sulphuric Acid Japan/South Korea FOB,-18.25
2020-06-01,Sulphuric Acid Japan/South Korea FOB,-15.0
2020-07-01,Sulphuric Acid Japan/South Korea FOB,-15.0
2020-08-01,Sulphuric Acid Japan/South Korea FOB,-15.0
2020-09-01,Sulphuric Acid Japan/South Korea FOB,-13.0
2020-10-01,Sulphuric Acid Japan/South Korea FOB,-10.4
2020-11-01,Sulphuric Acid Japan/South Korea FOB,-5.0
2020-12-01,Sulphuric Acid Japan/South Korea FOB,0.0
2021-01-01,Sulphuric Acid Japan/South Korea FOB,17.0
2021-02-01,Sulphuric Acid Japan/South Korea FOB,30.0
2021-03-01,Sulphuric Acid Japan/South Korea FOB,33.75
2021-04-01,Sulphuric Acid Japan/South Korea FOB,48.4
2021-05-01,Sulphuric Acid Japan/South Korea FOB,52.0
2021-06-01,Sulphuric Acid Japan/South Korea FOB,60.5
2021-07-01,Sulphuric Acid Japan/South Korea FOB,74.6
2021-08-01,Sulphuric Acid Japan/South Korea FOB,80.0
2021-09-01,Sulphuric Acid Japan/South Korea FOB,90.0
2021-10-01,Sulphuric Acid Japan/South Korea FOB,105.0
2021-11-01,Sulphuric Acid Japan/South Korea FOB,105.0
2021-12-01,Sulphuric Acid Japan/South Korea FOB,103.5
2022-01-01,Sulphuric Acid Japan/South Korea FOB,87.25
2022-02-01,Sulphuric Acid Japan/South Korea FOB,83.5
2022-03-01,Sulphuric Acid Japan/South Korea FOB,81.8
2022-04-01,Sulphuric Acid Japan/South Korea FOB,89.0
2022-05-01,Sulphuric Acid Japan/South Korea FOB,95.75
2022-06-01,Sulphuric Acid Japan/South Korea FOB,96.8
2022-07-01,Sulphuric Acid Japan/South Korea FOB,91.25
2022-08-01,Sulphuric Acid Japan/South Korea FOB,61.25
2022-09-01,Sulphuric Acid Japan/South Korea FOB,32.0
2022-10-01,Sulphuric Acid Japan/South Korea FOB,17.5
2022-11-01,Sulphuric Acid Japan/South Korea FOB,15.0
2022-12-01,Sulphuric Acid Japan/South Korea FOB,15.0
2023-01-01,Sulphuric Acid Japan/South Korea FOB,10.75
2023-02-01,Sulphuric Acid Japan/South Korea FOB,6.75
2023-03-01,Sulphuric Acid Japan/South Korea FOB,-4.8
2023-04-01,Sulphuric Acid Japan/South Korea FOB,-0.75
2023-05-01,Sulphuric Acid Japan/South Korea FOB,2.25
2023-06-01,Sulphuric Acid Japan/South Korea FOB,0.0
2023-07-01,Sulphuric Acid Japan/South Korea FOB,-3.75
2023-08-01,Sulphuric Acid Japan/South Korea FOB,-1.0
2023-09-01,Sulphuric Acid Japan/South Korea FOB,12.75
2023-10-01,Sulphuric Acid Japan/South Korea FOB,18.0
2023-11-01,Sulphuric Acid Japan/South Korea FOB,14.4
2023-12-01,Sulphuric Acid Japan/South Korea FOB,6.666666666666667
2024-01-01,Sulphuric Acid Japan/South Korea FOB,2.75
2024-02-01,Sulphuric Acid Japan/South Korea FOB,-2.4
2024-03-01,Sulphuric Acid Japan/South Korea FOB,0.0
2024-04-01,Sulphuric Acid Japan/South Korea FOB,2.5
2024-05-01,Sulphuric Acid Japan/South Korea FOB,3.4
2024-06-01,Sulphuric Acid Japan/South Korea FOB,4.0
2024-07-01,Sulphuric Acid Japan/South Korea FOB,9.0
2024-08-01,Sulphuric Acid Japan/South Korea FOB,17.0
2024-09-01,Sulphuric Acid Japan/South Korea FOB,20.0
2024-10-01,Sulphuric Acid Japan/South Korea FOB,20.6
2024-11-01,Sulphuric Acid Japan/South Korea FOB,24.5
2024-12-01,Sulphuric Acid Japan/South Korea FOB,24.33333333333333
2025-01-01,Sulphuric Acid Japan/South Korea FOB,29.4
2025-02-01,Sulphuric Acid Japan/South Korea FOB,33.0
2025-03-01,Sulphuric Acid Japan/South Korea FOB,34.5
2025-04-01,Sulphuric Acid Japan/South Korea FOB,38.25
2025-05-01,Sulphuric Acid Japan/South Korea FOB,43.8
2025-06-01,Sulphuric Acid Japan/South Korea FOB,47.0
2025-07-01,Sulphuric Acid Japan/South Korea FOB,52.0
2013-11-01,NPKs Baltic Sea 15-15-15 FOB,270.0
2013-12-01,NPKs Baltic Sea 15-15-15 FOB,267.5
2014-01-01,NPKs Baltic Sea 15-15-15 FOB,292.0
2014-02-01,NPKs Baltic Sea 15-15-15 FOB,345.0
2014-03-01,NPKs Baltic Sea 15-15-15 FOB,360.0
2014-04-01,NPKs Baltic Sea 15-15-15 FOB,360.0
2014-05-01,NPKs Baltic Sea 15-15-15 FOB,346.0
2014-06-01,NPKs Baltic Sea 15-15-15 FOB,340.0
2014-07-01,NPKs Baltic Sea 15-15-15 FOB,349.0
2014-08-01,NPKs Baltic Sea 15-15-15 FOB,360.0
2014-09-01,NPKs Baltic Sea 15-15-15 FOB,360.0
2014-10-01,NPKs Baltic Sea 15-15-15 FOB,357.0
2014-11-01,NPKs Baltic Sea 15-15-15 FOB,355.0
2014-12-01,NPKs Baltic Sea 15-15-15 FOB,352.5
2015-01-01,NPKs Baltic Sea 15-15-15 FOB,345.0
2015-02-01,NPKs Baltic Sea 15-15-15 FOB,345.0
2015-03-01,NPKs Baltic Sea 15-15-15 FOB,332.5
2015-04-01,NPKs Baltic Sea 15-15-15 FOB,330.0
2015-05-01,NPKs Baltic Sea 15-15-15 FOB,330.0
2015-06-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2015-07-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2015-08-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2015-09-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2015-10-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2015-11-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2015-12-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2016-01-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2016-02-01,NPKs Baltic Sea 15-15-15 FOB,321.5
2016-03-01,NPKs Baltic Sea 15-15-15 FOB,309.0
2016-04-01,NPKs Baltic Sea 15-15-15 FOB,257.5
2016-05-01,NPKs Baltic Sea 15-15-15 FOB,245.0
2016-06-01,NPKs Baltic Sea 15-15-15 FOB,265.0
2016-07-01,NPKs Baltic Sea 15-15-15 FOB,265.0
2016-08-01,NPKs Baltic Sea 15-15-15 FOB,263.75
2016-09-01,NPKs Baltic Sea 15-15-15 FOB,257.2
2016-10-01,NPKs Baltic Sea 15-15-15 FOB,250.75
2016-11-01,NPKs Baltic Sea 15-15-15 FOB,250.0
2016-12-01,NPKs Baltic Sea 15-15-15 FOB,250.0
2017-01-01,NPKs Baltic Sea 15-15-15 FOB,250.75
2017-02-01,NPKs Baltic Sea 15-15-15 FOB,254.75
2017-03-01,NPKs Baltic Sea 15-15-15 FOB,258.0
2017-04-01,NPKs Baltic Sea 15-15-15 FOB,257.25
2017-05-01,NPKs Baltic Sea 15-15-15 FOB,255.0
2017-06-01,NPKs Baltic Sea 15-15-15 FOB,255.0
2017-07-01,NPKs Baltic Sea 15-15-15 FOB,255.0
2017-08-01,NPKs Baltic Sea 15-15-15 FOB,256.8
2017-09-01,NPKs Baltic Sea 15-15-15 FOB,258.0
2017-10-01,NPKs Baltic Sea 15-15-15 FOB,261.5
2017-11-01,NPKs Baltic Sea 15-15-15 FOB,263.4
2017-12-01,NPKs Baltic Sea 15-15-15 FOB,265.0
2018-01-01,NPKs Baltic Sea 15-15-15 FOB,264.5
2018-02-01,NPKs Baltic Sea 15-15-15 FOB,264.0
2018-03-01,NPKs Baltic Sea 15-15-15 FOB,274.0
2018-04-01,NPKs Baltic Sea 15-15-15 FOB,274.0
2018-05-01,NPKs Baltic Sea 15-15-15 FOB,271.8
2018-06-01,NPKs Baltic Sea 15-15-15 FOB,272.5
2018-07-01,NPKs Baltic Sea 15-15-15 FOB,277.5
2018-08-01,NPKs Baltic Sea 15-15-15 FOB,284.0
2018-09-01,NPKs Baltic Sea 15-15-15 FOB,290.0
2018-10-01,NPKs Baltic Sea 15-15-15 FOB,290.0
2018-11-01,NPKs Baltic Sea 15-15-15 FOB,295.6
2018-12-01,NPKs Baltic Sea 15-15-15 FOB,297.0
2019-01-01,NPKs Baltic Sea 15-15-15 FOB,298.2
2019-02-01,NPKs Baltic Sea 15-15-15 FOB,294.5
2019-03-01,NPKs Baltic Sea 15-15-15 FOB,293.0
2019-04-01,NPKs Baltic Sea 15-15-15 FOB,293.0
2019-05-01,NPKs Baltic Sea 15-15-15 FOB,290.2
2019-06-01,NPKs Baltic Sea 15-15-15 FOB,288.0
2019-07-01,NPKs Baltic Sea 15-15-15 FOB,283.0
2019-08-01,NPKs Baltic Sea 15-15-15 FOB,280.6
2019-09-01,NPKs Baltic Sea 15-15-15 FOB,276.5
2019-10-01,NPKs Baltic Sea 15-15-15 FOB,273.0
2019-11-01,NPKs Baltic Sea 15-15-15 FOB,266.5
2019-12-01,NPKs Baltic Sea 15-15-15 FOB,260.0
2020-01-01,NPKs Baltic Sea 15-15-15 FOB,254.4
2020-02-01,NPKs Baltic Sea 15-15-15 FOB,253.0
2020-03-01,NPKs Baltic Sea 15-15-15 FOB,254.5
2020-04-01,NPKs Baltic Sea 15-15-15 FOB,255.0
2020-05-01,NPKs Baltic Sea 15-15-15 FOB,255.0
2020-06-01,NPKs Baltic Sea 15-15-15 FOB,253.5
2020-07-01,NPKs Baltic Sea 15-15-15 FOB,251.2
2020-08-01,NPKs Baltic Sea 15-15-15 FOB,252.25
2020-09-01,NPKs Baltic Sea 15-15-15 FOB,258.25
2020-10-01,NPKs Baltic Sea 15-15-15 FOB,260.0
2020-11-01,NPKs Baltic Sea 15-15-15 FOB,258.5
2020-12-01,NPKs Baltic Sea 15-15-15 FOB,258.0
2021-01-01,NPKs Baltic Sea 15-15-15 FOB,265.5
2021-02-01,NPKs Baltic Sea 15-15-15 FOB,292.0
2021-03-01,NPKs Baltic Sea 15-15-15 FOB,305.0
2021-04-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2021-05-01,NPKs Baltic Sea 15-15-15 FOB,347.5
2021-06-01,NPKs Baltic Sea 15-15-15 FOB,375.0
2021-07-01,NPKs Baltic Sea 15-15-15 FOB,421.0
2021-08-01,NPKs Baltic Sea 15-15-15 FOB,435.0
2021-09-01,NPKs Baltic Sea 15-15-15 FOB,423.0
2021-10-01,NPKs Baltic Sea 15-15-15 FOB,492.5
2021-11-01,NPKs Baltic Sea 15-15-15 FOB,562.5
2021-12-01,NPKs Baltic Sea 15-15-15 FOB,585.0
2022-01-01,NPKs Baltic Sea 15-15-15 FOB,606.25
2022-02-01,NPKs Baltic Sea 15-15-15 FOB,617.5
2022-03-01,NPKs Baltic Sea 15-15-15 FOB,740.0
2022-04-01,NPKs Baltic Sea 15-15-15 FOB,785.0
2022-05-01,NPKs Baltic Sea 15-15-15 FOB,782.5
2022-06-01,NPKs Baltic Sea 15-15-15 FOB,739.0
2022-07-01,NPKs Baltic Sea 15-15-15 FOB,705.0
2022-08-01,NPKs Baltic Sea 15-15-15 FOB,677.5
2022-09-01,NPKs Baltic Sea 15-15-15 FOB,652.0
2022-10-01,NPKs Baltic Sea 15-15-15 FOB,625.0
2022-11-01,NPKs Baltic Sea 15-15-15 FOB,578.75
2022-12-01,NPKs Baltic Sea 15-15-15 FOB,555.0
2023-01-01,NPKs Baltic Sea 15-15-15 FOB,534.0
2023-02-01,NPKs Baltic Sea 15-15-15 FOB,523.0
2023-03-01,NPKs Baltic Sea 15-15-15 FOB,515.0
2023-04-01,NPKs Baltic Sea 15-15-15 FOB,490.5
2023-05-01,NPKs Baltic Sea 15-15-15 FOB,426.75
2023-06-01,NPKs Baltic Sea 15-15-15 FOB,408.0
2023-07-01,NPKs Baltic Sea 15-15-15 FOB,408.0
2023-08-01,NPKs Baltic Sea 15-15-15 FOB,408.0
2023-09-01,NPKs Baltic Sea 15-15-15 FOB,428.25
2023-10-01,NPKs Baltic Sea 15-15-15 FOB,435.0
2023-11-01,NPKs Baltic Sea 15-15-15 FOB,435.0
2023-12-01,NPKs Baltic Sea 15-15-15 FOB,421.6666666666667
2024-01-01,NPKs Baltic Sea 15-15-15 FOB,415.0
2024-02-01,NPKs Baltic Sea 15-15-15 FOB,415.0
2024-03-01,NPKs Baltic Sea 15-15-15 FOB,415.0
2024-04-01,NPKs Baltic Sea 15-15-15 FOB,415.0
2024-05-01,NPKs Baltic Sea 15-15-15 FOB,415.0
2024-06-01,NPKs Baltic Sea 15-15-15 FOB,415.0
2024-07-01,NPKs Baltic Sea 15-15-15 FOB,410.0
2024-08-01,NPKs Baltic Sea 15-15-15 FOB,410.0
2024-09-01,NPKs Baltic Sea 15-15-15 FOB,396.25
2024-10-01,NPKs Baltic Sea 15-15-15 FOB,355.0
2024-11-01,NPKs Baltic Sea 15-15-15 FOB,358.75
2024-12-01,NPKs Baltic Sea 15-15-15 FOB,355.0
2025-01-01,NPKs Baltic Sea 15-15-15 FOB,355.0
2025-02-01,NPKs Baltic Sea 15-15-15 FOB,355.0
2025-03-01,NPKs Baltic Sea 15-15-15 FOB,360.0
2025-04-01,NPKs Baltic Sea 15-15-15 FOB,375.0
2025-05-01,NPKs Baltic Sea 15-15-15 FOB,386.2
2025-06-01,NPKs Baltic Sea 15-15-15 FOB,413.0
2025-07-01,NPKs Baltic Sea 15-15-15 FOB,423.8
2025-08-01,NPKs Baltic Sea 15-15-15 FOB,422.5
2025-09-01,NPKs Baltic Sea 15-15-15 FOB,405.0
2025-10-01,NPKs Baltic Sea 15-15-15 FOB,388.0
2016-10-01,NPKs India 20-20-0-13 CFR,255.0
2016-11-01,NPKs India 20-20-0-13 CFR,255.0
2016-12-01,NPKs India 20-20-0-13 CFR,255.0
2017-01-01,NPKs India 20-20-0-13 CFR,255.0
2017-02-01,NPKs India 20-20-0-13 CFR,268.5
2017-03-01,NPKs India 20-20-0-13 CFR,268.0
2017-04-01,NPKs India 20-20-0-13 CFR,268.0
2017-05-01,NPKs India 20-20-0-13 CFR,268.0
2017-06-01,NPKs India 20-20-0-13 CFR,268.0
2017-07-01,NPKs India 20-20-0-13 CFR,264.0
2017-08-01,NPKs India 20-20-0-13 CFR,263.4
2017-09-01,NPKs India 20-20-0-13 CFR,267.0
2017-10-01,NPKs India 20-20-0-13 CFR,269.0
2017-11-01,NPKs India 20-20-0-13 CFR,271.0
2017-12-01,NPKs India 20-20-0-13 CFR,273.0
2018-01-01,NPKs India 20-20-0-13 CFR,283.0
2018-02-01,NPKs India 20-20-0-13 CFR,283.0
2018-03-01,NPKs India 20-20-0-13 CFR,289.0
2018-04-01,NPKs India 20-20-0-13 CFR,293.0
2018-05-01,NPKs India 20-20-0-13 CFR,297.0
2018-06-01,NPKs India 20-20-0-13 CFR,298.0
2018-07-01,NPKs India 20-20-0-13 CFR,298.0
2018-08-01,NPKs India 20-20-0-13 CFR,303.4
2018-09-01,NPKs India 20-20-0-13 CFR,313.0
2018-10-01,NPKs India 20-20-0-13 CFR,313.0
2018-11-01,NPKs India 20-20-0-13 CFR,313.0
2018-12-01,NPKs India 20-20-0-13 CFR,313.0
2019-01-01,NPKs India 20-20-0-13 CFR,313.0
2019-02-01,NPKs India 20-20-0-13 CFR,313.0
2019-03-01,NPKs India 20-20-0-13 CFR,308.0
2019-04-01,NPKs India 20-20-0-13 CFR,303.0
2019-05-01,NPKs India 20-20-0-13 CFR,303.0
2019-06-01,NPKs India 20-20-0-13 CFR,299.25
2019-07-01,NPKs India 20-20-0-13 CFR,288.0
2019-08-01,NPKs India 20-20-0-13 CFR,290.4
2019-09-01,NPKs India 20-20-0-13 CFR,288.0
2019-10-01,NPKs India 20-20-0-13 CFR,274.4
2019-11-01,NPKs India 20-20-0-13 CFR,267.0
2019-12-01,NPKs India 20-20-0-13 CFR,263.0
2020-01-01,NPKs India 20-20-0-13 CFR,263.0
2020-02-01,NPKs India 20-20-0-13 CFR,274.25
2020-03-01,NPKs India 20-20-0-13 CFR,278.0
2020-04-01,NPKs India 20-20-0-13 CFR,268.2
2020-05-01,NPKs India 20-20-0-13 CFR,265.0
2020-06-01,NPKs India 20-20-0-13 CFR,265.0
2020-07-01,NPKs India 20-20-0-13 CFR,262.8
2020-08-01,NPKs India 20-20-0-13 CFR,262.5
2020-09-01,NPKs India 20-20-0-13 CFR,262.0
2020-10-01,NPKs India 20-20-0-13 CFR,265.2
2020-11-01,NPKs India 20-20-0-13 CFR,267.75
2020-12-01,NPKs India 20-20-0-13 CFR,261.0
2021-01-01,NPKs India 20-20-0-13 CFR,286.5
2021-02-01,NPKs India 20-20-0-13 CFR,312.25
2021-03-01,NPKs India 20-20-0-13 CFR,325.5
2021-04-01,NPKs India 20-20-0-13 CFR,375.4
2021-05-01,NPKs India 20-20-0-13 CFR,389.0
2021-06-01,NPKs India 20-20-0-13 CFR,401.25
2021-07-01,NPKs India 20-20-0-13 CFR,442.2
2021-08-01,NPKs India 20-20-0-13 CFR,445.0
2021-09-01,NPKs India 20-20-0-13 CFR,449.8
2021-10-01,NPKs India 20-20-0-13 CFR,451.0
2021-11-01,NPKs India 20-20-0-13 CFR,451.0
2022-01-01,NPKs India 20-20-0-13 CFR,691.25
2022-02-01,NPKs India 20-20-0-13 CFR,663.5
2022-03-01,NPKs India 20-20-0-13 CFR,676.6
2022-04-01,NPKs India 20-20-0-13 CFR,682.0
2022-05-01,NPKs India 20-20-0-13 CFR,706.5
2022-06-01,NPKs India 20-20-0-13 CFR,716.2
2022-07-01,NPKs India 20-20-0-13 CFR,711.25
2022-08-01,NPKs India 20-20-0-13 CFR,642.5
2022-09-01,NPKs India 20-20-0-13 CFR,609.2
2022-10-01,NPKs India 20-20-0-13 CFR,590.0
2022-11-01,NPKs India 20-20-0-13 CFR,590.0
2022-12-01,NPKs India 20-20-0-13 CFR,590.0
2023-01-01,NPKs India 20-20-0-13 CFR,514.0
2023-02-01,NPKs India 20-20-0-13 CFR,468.0
2023-03-01,NPKs India 20-20-0-13 CFR,455.0
2023-04-01,NPKs India 20-20-0-13 CFR,407.25
2023-05-01,NPKs India 20-20-0-13 CFR,360.0
2023-06-01,NPKs India 20-20-0-13 CFR,357.0
2023-07-01,NPKs India 20-20-0-13 CFR,355.0
2023-08-01,NPKs India 20-20-0-13 CFR,379.0
2023-09-01,NPKs India 20-20-0-13 CFR,415.0
2023-10-01,NPKs India 20-20-0-13 CFR,424.0
2023-11-01,NPKs India 20-20-0-13 CFR,398.4
2023-12-01,NPKs India 20-20-0-13 CFR,379.3333333333333
2024-01-01,NPKs India 20-20-0-13 CFR,366.75
2024-02-01,NPKs India 20-20-0-13 CFR,370.2
2024-03-01,NPKs India 20-20-0-13 CFR,372.0
2024-04-01,NPKs India 20-20-0-13 CFR,371.0
2024-05-01,NPKs India 20-20-0-13 CFR,352.6
2024-06-01,NPKs India 20-20-0-13 CFR,353.0
2024-07-01,NPKs India 20-20-0-13 CFR,360.0
2024-08-01,NPKs India 20-20-0-13 CFR,360.0
2024-09-01,NPKs India 20-20-0-13 CFR,397.0
2024-10-01,NPKs India 20-20-0-13 CFR,397.0
2024-11-01,NPKs India 20-20-0-13 CFR,398.0
2024-12-01,NPKs India 20-20-0-13 CFR,401.0
2025-01-01,NPKs India 20-20-0-13 CFR,398.2
2025-02-01,NPKs India 20-20-0-13 CFR,399.25
2025-03-01,NPKs India 20-20-0-13 CFR,404.0
2025-04-01,NPKs India 20-20-0-13 CFR,428.25
2025-05-01,NPKs India 20-20-0-13 CFR,439.4
2025-06-01,NPKs India 20-20-0-13 CFR,449.0
2025-07-01,NPKs India 20-20-0-13 CFR,464.4
2025-08-01,NPKs India 20-20-0-13 CFR,469.0
2025-09-01,NPKs India 20-20-0-13 CFR,466.5
2025-10-01,NPKs India 20-20-0-13 CFR,451.6
`;
// ------------------------------------------------------------------
const csvRealisasiContent = `Month,Material,Price
2015-01-01,Sulphur,189.55
2015-02-01,Sulphur,189.55
2015-03-01,Sulphur,189.55
2015-04-01,Sulphur,177.74
2015-05-01,Sulphur,167.17
2015-06-01,Sulphur,156.25
2015-07-01,Sulphur,160.74
2015-08-01,Sulphur,165.0
2015-09-01,Sulphur,161.5
2015-10-01,Sulphur,130.0
2015-11-01,Sulphur,134.83
2015-12-01,Sulphur,139.5
2016-01-01,Sulphur,135.16
2016-02-01,Sulphur,130.82
2016-03-01,Sulphur,104.34
2016-04-01,Sulphur,98.58
2016-05-01,Sulphur,93.0
2016-06-01,Sulphur,93.0
2016-07-01,Sulphur,93.0
2016-08-01,Sulphur,81.41
2016-09-01,Sulphur,85.01
2016-10-01,Sulphur,88.5
2016-11-01,Sulphur,93.33
2016-12-01,Sulphur,98.0
2017-01-01,Sulphur,106.0
2017-02-01,Sulphur,102.6
2017-03-01,Sulphur,100.5
2017-04-01,Sulphur,99.02
2017-05-01,Sulphur,87.5
2017-06-01,Sulphur,88.5
2017-07-01,Sulphur,96.0
2017-08-01,Sulphur,103.75
2017-09-01,Sulphur,119.46
2017-10-01,Sulphur,123.5
2017-11-01,Sulphur,167.99
2017-12-01,Sulphur,211.05
2018-01-01,Sulphur,190.74
2018-02-01,Sulphur,151.5
2018-03-01,Sulphur,150.55
2018-04-01,Sulphur,149.5
2018-05-01,Sulphur,146.0
2018-06-01,Sulphur,146.0
2018-07-01,Sulphur,155.5
2018-08-01,Sulphur,153.5
2018-09-01,Sulphur,152.76
2018-10-01,Sulphur,172.06
2018-11-01,Sulphur,192.0
2018-12-01,Sulphur,181.5
2019-01-01,Sulphur,153.0
2019-02-01,Sulphur,126.25
2019-03-01,Sulphur,122.24
2019-04-01,Sulphur,117.8
2019-05-01,Sulphur,113.5
2019-06-01,Sulphur,113.5
2019-07-01,Sulphur,113.5
2019-08-01,Sulphur,111.53
2019-09-01,Sulphur,97.87
2019-10-01,Sulphur,84.66
2019-11-01,Sulphur,71.0
2019-12-01,Sulphur,70.54
2020-01-01,Sulphur,70.07
2020-02-01,Sulphur,69.6
2020-03-01,Sulphur,70.76
2020-04-01,Sulphur,72.0
2020-05-01,Sulphur,74.97
2020-06-01,Sulphur,78.03
2020-07-01,Sulphur,81.0
2020-08-01,Sulphur,75.5
2020-09-01,Sulphur,78.84
2020-10-01,Sulphur,82.07
2020-11-01,Sulphur,92.2
2020-12-01,Sulphur,102.0
2021-01-01,Sulphur,114.5
2021-02-01,Sulphur,155.9
2021-03-01,Sulphur,193.28
2021-04-01,Sulphur,234.68
2021-05-01,Sulphur,229.53
2021-06-01,Sulphur,224.2
2021-07-01,Sulphur,235.2
2021-08-01,Sulphur,228.45
2021-09-01,Sulphur,221.7
2021-10-01,Sulphur,246.54
2021-11-01,Sulphur,272.2
2021-12-01,Sulphur,304.76
2022-01-01,Sulphur,317.0
2022-02-01,Sulphur,363.15
2022-03-01,Sulphur,404.84
2022-04-01,Sulphur,450.99
2022-05-01,Sulphur,495.65
2022-06-01,Sulphur,532.45
2022-07-01,Sulphur,515.2
2022-08-01,Sulphur,428.05
2022-09-01,Sulphur,340.89
2022-10-01,Sulphur,256.55
2022-11-01,Sulphur,169.4
2022-12-01,Sulphur,184.15
2023-01-01,Sulphur,199.4
2023-02-01,Sulphur,179.12
2023-03-01,Sulphur,160.8
2023-04-01,Sulphur,162.68
2023-05-01,Sulphur,135.15
2023-06-01,Sulphur,119.74
2023-07-01,Sulphur,104.83
2023-08-01,Sulphur,117.29
2023-09-01,Sulphur,129.75
2023-10-01,Sulphur,138.75
2023-11-01,Sulphur,130.62
2023-12-01,Sulphur,122.75
2024-01-01,Sulphur,112.88
2024-02-01,Sulphur,103.0
2024-03-01,Sulphur,108.44
2024-04-01,Sulphur,114.25
2024-05-01,Sulphur,112.11
2024-06-01,Sulphur,109.9
2024-07-01,Sulphur,107.76
2024-08-01,Sulphur,130.88
2024-09-01,Sulphur,154.01
2024-10-01,Sulphur,154.01
2024-11-01,Sulphur,155.01
2024-12-01,Sulphur,168.62
2025-01-01,Sulphur,182.69
2025-02-01,Sulphur,196.75
2025-03-01,Sulphur,211.25
2025-04-01,Sulphur,312.75
2025-05-01,Sulphur,312.75
2025-06-01,Sulphur,312.75
2025-07-01,Sulphur,308.9
2025-08-01,Sulphur,286.0
2015-01-01,Sulfuric Acid,60.2
2015-02-01,Sulfuric Acid,34.03
2015-03-01,Sulfuric Acid,34.72
2015-04-01,Sulfuric Acid,37.83
2015-05-01,Sulfuric Acid,36.77
2015-06-01,Sulfuric Acid,30.98
2015-07-01,Sulfuric Acid,37.87
2015-08-01,Sulfuric Acid,36.22
2015-09-01,Sulfuric Acid,31.12
2015-10-01,Sulfuric Acid,33.03
2015-11-01,Sulfuric Acid,27.64
2015-12-01,Sulfuric Acid,26.68
2016-01-01,Sulfuric Acid,61.78
2016-02-01,Sulfuric Acid,28.99
2016-03-01,Sulfuric Acid,26.39
2016-04-01,Sulfuric Acid,22.34
2016-05-01,Sulfuric Acid,20.11
2016-06-01,Sulfuric Acid,18.86
2016-07-01,Sulfuric Acid,17.58
2016-08-01,Sulfuric Acid,20.41
2016-09-01,Sulfuric Acid,20.28
2016-10-01,Sulfuric Acid,20.99
2016-11-01,Sulfuric Acid,20.78
2016-12-01,Sulfuric Acid,20.43
2017-01-01,Sulfuric Acid,41.16
2017-02-01,Sulfuric Acid,22.26
2017-03-01,Sulfuric Acid,21.07
2017-04-01,Sulfuric Acid,21.55
2017-05-01,Sulfuric Acid,23.25
2017-06-01,Sulfuric Acid,21.08
2017-07-01,Sulfuric Acid,22.04
2017-08-01,Sulfuric Acid,23.41
2017-09-01,Sulfuric Acid,27.62
2017-10-01,Sulfuric Acid,27.99
2017-11-01,Sulfuric Acid,29.14
2017-12-01,Sulfuric Acid,43.99
2018-01-01,Sulfuric Acid,38.92
2018-02-01,Sulfuric Acid,44.25
2018-03-01,Sulfuric Acid,34.19
2018-04-01,Sulfuric Acid,32.93
2018-05-01,Sulfuric Acid,35.9
2018-06-01,Sulfuric Acid,40.88
2018-07-01,Sulfuric Acid,40.84
2018-08-01,Sulfuric Acid,42.07
2018-09-01,Sulfuric Acid,44.73
2018-10-01,Sulfuric Acid,48.71
2018-11-01,Sulfuric Acid,71.95
2018-12-01,Sulfuric Acid,57.1
2019-01-01,Sulfuric Acid,111.77
2019-02-01,Sulfuric Acid,58.22
2019-03-01,Sulfuric Acid,36.2
2019-04-01,Sulfuric Acid,23.1
2019-05-01,Sulfuric Acid,40.91
2019-06-01,Sulfuric Acid,29.7
2019-07-01,Sulfuric Acid,30.56
2019-08-01,Sulfuric Acid,28.65
2019-09-01,Sulfuric Acid,23.24
2019-10-01,Sulfuric Acid,19.27
2019-11-01,Sulfuric Acid,17.06
2019-12-01,Sulfuric Acid,14.91
2020-01-01,Sulfuric Acid,11.41
2020-02-01,Sulfuric Acid,11.72
2020-03-01,Sulfuric Acid,13.77
2020-04-01,Sulfuric Acid,14.26
2020-05-01,Sulfuric Acid,14.72
2020-06-01,Sulfuric Acid,15.21
2020-07-01,Sulfuric Acid,15.68
2020-08-01,Sulfuric Acid,14.42
2020-09-01,Sulfuric Acid,15.86
2020-10-01,Sulfuric Acid,15.67
2020-11-01,Sulfuric Acid,13.55
2020-12-01,Sulfuric Acid,20.52
2021-01-01,Sulfuric Acid,55.45
2021-02-01,Sulfuric Acid,24.98
2021-03-01,Sulfuric Acid,36.83
2021-04-01,Sulfuric Acid,84.61
2021-05-01,Sulfuric Acid,49.33
2021-06-01,Sulfuric Acid,44.31
2021-07-01,Sulfuric Acid,47.08
2021-08-01,Sulfuric Acid,49.39
2021-09-01,Sulfuric Acid,44.9
2021-10-01,Sulfuric Acid,46.56
2021-11-01,Sulfuric Acid,54.65
2021-12-01,Sulfuric Acid,57.16
2022-01-01,Sulfuric Acid,64.0
2022-02-01,Sulfuric Acid,73.1
2022-03-01,Sulfuric Acid,87.3
2022-04-01,Sulfuric Acid,141.94
2022-05-01,Sulfuric Acid,111.27
2022-06-01,Sulfuric Acid,104.09
2022-07-01,Sulfuric Acid,111.81
2022-08-01,Sulfuric Acid,108.29
2022-09-01,Sulfuric Acid,63.92
2022-10-01,Sulfuric Acid,33.2
2022-11-01,Sulfuric Acid,35.93
2022-12-01,Sulfuric Acid,35.57
2023-01-01,Sulfuric Acid,40.14
2023-02-01,Sulfuric Acid,31.82
2023-03-01,Sulfuric Acid,29.24
2023-04-01,Sulfuric Acid,26.33
2023-05-01,Sulfuric Acid,23.51
2023-06-01,Sulfuric Acid,41.5
2023-07-01,Sulfuric Acid,25.77
2023-08-01,Sulfuric Acid,18.65
2023-09-01,Sulfuric Acid,23.18
2023-10-01,Sulfuric Acid,26.2
2023-11-01,Sulfuric Acid,25.97
2023-12-01,Sulfuric Acid,22.85
2024-01-01,Sulfuric Acid,19.78
2024-02-01,Sulfuric Acid,18.56
2024-03-01,Sulfuric Acid,18.19
2024-04-01,Sulfuric Acid,19.9
2024-05-01,Sulfuric Acid,21.55
2024-06-01,Sulfuric Acid,21.23
2024-07-01,Sulfuric Acid,34.92
2024-08-01,Sulfuric Acid,26.16
2024-09-01,Sulfuric Acid,42.85
2024-10-01,Sulfuric Acid,40.66
2024-11-01,Sulfuric Acid,45.55
2024-12-01,Sulfuric Acid,29.19
2025-01-01,Sulfuric Acid,514.39
2025-02-01,Sulfuric Acid,355.38
2025-03-01,Sulfuric Acid,784.76
2025-04-01,Sulfuric Acid,899.47
2025-05-01,Sulfuric Acid,1010.47
2025-06-01,Sulfuric Acid,1027.99
2025-07-01,Sulfuric Acid,808.66
2025-08-01,Sulfuric Acid,841.48
2015-01-01,KCl/MOP,310.0
2015-02-01,KCl/MOP,330.0
2015-03-01,KCl/MOP,330.0
2015-04-01,KCl/MOP,330.0
2015-05-01,KCl/MOP,330.0
2015-06-01,KCl/MOP,320.0
2015-07-01,KCl/MOP,320.0
2015-08-01,KCl/MOP,320.0
2015-09-01,KCl/MOP,320.0
2015-10-01,KCl/MOP,320.0
2015-11-01,KCl/MOP,320.0
2015-12-01,KCl/MOP,320.0
2016-01-01,KCl/MOP,320.0
2016-02-01,KCl/MOP,320.0
2016-03-01,KCl/MOP,320.0
2016-04-01,KCl/MOP,278.0
2016-05-01,KCl/MOP,278.0
2016-06-01,KCl/MOP,278.0
2016-07-01,KCl/MOP,278.0
2016-08-01,KCl/MOP,278.0
2016-09-01,KCl/MOP,278.0
2016-10-01,KCl/MOP,278.0
2016-11-01,KCl/MOP,278.0
2016-12-01,KCl/MOP,233.0
2017-01-01,KCl/MOP,233.0
2017-02-01,KCl/MOP,233.0
2017-03-01,KCl/MOP,233.0
2017-04-01,KCl/MOP,233.0
2017-05-01,KCl/MOP,233.0
2017-06-01,KCl/MOP,233.0
2017-07-01,KCl/MOP,233.0
2017-08-01,KCl/MOP,250.0
2017-09-01,KCl/MOP,250.0
2017-10-01,KCl/MOP,250.0
2017-11-01,KCl/MOP,250.0
2017-12-01,KCl/MOP,250.0
2018-01-01,KCl/MOP,250.0
2018-02-01,KCl/MOP,250.0
2018-03-01,KCl/MOP,250.0
2018-04-01,KCl/MOP,280.0
2018-05-01,KCl/MOP,280.0
2018-06-01,KCl/MOP,280.0
2018-07-01,KCl/MOP,280.0
2018-08-01,KCl/MOP,280.0
2018-09-01,KCl/MOP,280.0
2018-10-01,KCl/MOP,280.0
2018-11-01,KCl/MOP,280.0
2018-12-01,KCl/MOP,315.0
2019-01-01,KCl/MOP,306.22
2019-02-01,KCl/MOP,315.0
2019-03-01,KCl/MOP,315.0
2019-04-01,KCl/MOP,315.0
2019-05-01,KCl/MOP,315.0
2019-06-01,KCl/MOP,318.03
2019-07-01,KCl/MOP,320.97
2019-08-01,KCl/MOP,324.0
2019-09-01,KCl/MOP,324.0
2019-10-01,KCl/MOP,324.0
2019-11-01,KCl/MOP,324.0
2019-12-01,KCl/MOP,324.0
2020-01-01,KCl/MOP,324.0
2020-02-01,KCl/MOP,270.0
2020-03-01,KCl/MOP,266.13
2020-04-01,KCl/MOP,262.0
2020-05-01,KCl/MOP,262.0
2020-06-01,KCl/MOP,262.0
2020-07-01,KCl/MOP,262.0
2020-08-01,KCl/MOP,262.0
2020-09-01,KCl/MOP,247.4
2020-10-01,KCl/MOP,252.5
2020-11-01,KCl/MOP,243.0
2020-12-01,KCl/MOP,243.0
2021-01-01,KCl/MOP,243.0
2021-02-01,KCl/MOP,251.34
2021-03-01,KCl/MOP,243.0
2021-04-01,KCl/MOP,263.54
2021-05-01,KCl/MOP,280.67
2021-06-01,KCl/MOP,280.0
2021-07-01,KCl/MOP,280.0
2021-08-01,KCl/MOP,280.0
2021-09-01,KCl/MOP,280.0
2021-10-01,KCl/MOP,280.0
2021-11-01,KCl/MOP,550.0
2021-12-01,KCl/MOP,550.0
2022-01-01,KCl/MOP,550.0
2022-02-01,KCl/MOP,550.0
2022-03-01,KCl/MOP,550.0
2022-04-01,KCl/MOP,550.0
2022-05-01,KCl/MOP,550.0
2022-06-01,KCl/MOP,917.38
2022-07-01,KCl/MOP,920.43
2022-08-01,KCl/MOP,1026.86
2022-09-01,KCl/MOP,950.0
2022-10-01,KCl/MOP,1046.06
2022-11-01,KCl/MOP,1014.21
2022-12-01,KCl/MOP,1068.7
2023-01-01,KCl/MOP,1125.0
2023-02-01,KCl/MOP,1125.0
2023-03-01,KCl/MOP,812.5
2023-04-01,KCl/MOP,645.48
2023-05-01,KCl/MOP,483.85
2023-06-01,KCl/MOP,463.63
2023-07-01,KCl/MOP,471.0
2023-08-01,KCl/MOP,442.0
2023-09-01,KCl/MOP,442.0
2023-10-01,KCl/MOP,353.69
2023-11-01,KCl/MOP,306.0
2023-12-01,KCl/MOP,306.0
2024-01-01,KCl/MOP,306.0
2024-02-01,KCl/MOP,306.0
2024-03-01,KCl/MOP,306.0
2024-04-01,KCl/MOP,304.95
2024-05-01,KCl/MOP,303.94
2024-06-01,KCl/MOP,302.0
2024-07-01,KCl/MOP,302.0
2024-08-01,KCl/MOP,299.0
2024-09-01,KCl/MOP,299.0
2024-10-01,KCl/MOP,299.0
2024-11-01,KCl/MOP,299.0
2024-12-01,KCl/MOP,300.48
2025-01-01,KCl/MOP,302.0
2025-02-01,KCl/MOP,302.0
2025-03-01,KCl/MOP,302.0
2025-04-01,KCl/MOP,302.0
2025-05-01,KCl/MOP,302.0
2025-06-01,KCl/MOP,302.0
2025-07-01,KCl/MOP,360.0
2025-08-01,KCl/MOP,375.0
2015-01-01,Phospate Rock,149.0
2015-02-01,Phospate Rock,130.74
2015-03-01,Phospate Rock,138.33
2015-04-01,Phospate Rock,149.0
2015-05-01,Phospate Rock,118.18
2015-06-01,Phospate Rock,137.27
2015-07-01,Phospate Rock,135.91
2015-08-01,Phospate Rock,134.51
2015-09-01,Phospate Rock,124.92
2015-10-01,Phospate Rock,121.1
2015-11-01,Phospate Rock,120.67
2015-12-01,Phospate Rock,128.87
2016-01-01,Phospate Rock,110.64
2016-02-01,Phospate Rock,142.0
2016-03-01,Phospate Rock,126.0
2016-04-01,Phospate Rock,112.23
2016-05-01,Phospate Rock,105.33
2016-06-01,Phospate Rock,98.8
2016-07-01,Phospate Rock,111.88
2016-08-01,Phospate Rock,126.0
2016-09-01,Phospate Rock,104.0
2016-10-01,Phospate Rock,88.43
2016-11-01,Phospate Rock,89.32
2016-12-01,Phospate Rock,93.85
2017-01-01,Phospate Rock,90.26
2017-02-01,Phospate Rock,94.78
2017-03-01,Phospate Rock,91.09
2017-04-01,Phospate Rock,89.96
2017-05-01,Phospate Rock,90.14
2017-06-01,Phospate Rock,90.0
2017-07-01,Phospate Rock,93.06
2017-08-01,Phospate Rock,90.0
2017-09-01,Phospate Rock,90.01
2017-10-01,Phospate Rock,98.89
2017-11-01,Phospate Rock,82.0
2017-12-01,Phospate Rock,96.1
2018-01-01,Phospate Rock,92.44
2018-02-01,Phospate Rock,92.0
2018-03-01,Phospate Rock,93.23
2018-04-01,Phospate Rock,97.43
2018-05-01,Phospate Rock,119.93
2018-06-01,Phospate Rock,117.86
2018-07-01,Phospate Rock,113.17
2018-08-01,Phospate Rock,113.0
2018-09-01,Phospate Rock,120.18
2018-10-01,Phospate Rock,107.98
2018-11-01,Phospate Rock,108.49
2018-12-01,Phospate Rock,108.98
2019-01-01,Phospate Rock,119.0
2019-02-01,Phospate Rock,118.08
2019-03-01,Phospate Rock,112.73
2019-04-01,Phospate Rock,134.0
2019-05-01,Phospate Rock,119.0
2019-06-01,Phospate Rock,112.7
2019-07-01,Phospate Rock,134.0
2019-08-01,Phospate Rock,126.57
2019-09-01,Phospate Rock,115.39
2019-10-01,Phospate Rock,120.65
2019-11-01,Phospate Rock,115.38
2019-12-01,Phospate Rock,128.0
2020-01-01,Phospate Rock,106.98
2020-02-01,Phospate Rock,114.66
2020-03-01,Phospate Rock,114.1
2020-04-01,Phospate Rock,111.64
2020-05-01,Phospate Rock,110.0
2020-06-01,Phospate Rock,113.33
2020-07-01,Phospate Rock,114.27
2020-08-01,Phospate Rock,80.0
2020-09-01,Phospate Rock,111.29
2020-10-01,Phospate Rock,98.0
2020-11-01,Phospate Rock,106.33
2020-12-01,Phospate Rock,114.39
2021-01-01,Phospate Rock,103.29
2021-02-01,Phospate Rock,107.36
2021-03-01,Phospate Rock,111.04
2021-04-01,Phospate Rock,124.0
2021-05-01,Phospate Rock,143.46
2021-06-01,Phospate Rock,174.4
2021-07-01,Phospate Rock,153.36
2021-08-01,Phospate Rock,162.85
2021-09-01,Phospate Rock,162.85
2021-10-01,Phospate Rock,142.0
2021-11-01,Phospate Rock,162.85
2021-12-01,Phospate Rock,153.67
2022-01-01,Phospate Rock,162.85
2022-02-01,Phospate Rock,142.0
2022-03-01,Phospate Rock,346.5
2022-04-01,Phospate Rock,327.31
2022-05-01,Phospate Rock,321.97
2022-06-01,Phospate Rock,316.45
2022-07-01,Phospate Rock,175.0
2022-08-01,Phospate Rock,348.21
2022-09-01,Phospate Rock,318.0
2022-10-01,Phospate Rock,283.33
2022-11-01,Phospate Rock,247.5
2022-12-01,Phospate Rock,212.83
2023-01-01,Phospate Rock,177.0
2023-02-01,Phospate Rock,201.88
2023-03-01,Phospate Rock,224.36
2023-04-01,Phospate Rock,161.0
2023-05-01,Phospate Rock,156.57
2023-06-01,Phospate Rock,152.0
2023-07-01,Phospate Rock,150.9
2023-08-01,Phospate Rock,150.0
2023-09-01,Phospate Rock,137.8
2023-10-01,Phospate Rock,126.0
2023-11-01,Phospate Rock,136.41
2023-12-01,Phospate Rock,138.18
2024-01-01,Phospate Rock,140.0
2024-02-01,Phospate Rock,140.0
2024-03-01,Phospate Rock,137.31
2024-04-01,Phospate Rock,148.0
2024-05-01,Phospate Rock,140.18
2024-06-01,Phospate Rock,156.0
2024-07-01,Phospate Rock,143.1
2024-08-01,Phospate Rock,141.46
2024-09-01,Phospate Rock,139.82
2024-10-01,Phospate Rock,138.24
2024-11-01,Phospate Rock,167.0
2024-12-01,Phospate Rock,167.0
2025-01-01,Phospate Rock,167.0
2025-02-01,Phospate Rock,123.0
2025-03-01,Phospate Rock,123.0
2025-04-01,Phospate Rock,118.93
2025-05-01,Phospate Rock,115.0
2025-06-01,Phospate Rock,115.0
2025-07-01,Phospate Rock,114.5
2025-08-01,Phospate Rock,114.5
2015-01-01,Phosporic Acid,792.73
2015-02-01,Phosporic Acid,809.48
2015-03-01,Phosporic Acid,811.43
2015-04-01,Phosporic Acid,803.26
2015-05-01,Phosporic Acid,805.0
2015-06-01,Phosporic Acid,805.0
2015-07-01,Phosporic Acid,805.0
2015-08-01,Phosporic Acid,832.35
2015-09-01,Phosporic Acid,808.33
2015-10-01,Phosporic Acid,810.0
2015-11-01,Phosporic Acid,815.58
2015-12-01,Phosporic Acid,810.0
2016-01-01,Phosporic Acid,810.0
2016-02-01,Phosporic Acid,778.33
2016-03-01,Phosporic Acid,726.85
2016-04-01,Phosporic Acid,715.0
2016-05-01,Phosporic Acid,715.0
2016-06-01,Phosporic Acid,715.0
2016-07-01,Phosporic Acid,632.24
2016-08-01,Phosporic Acid,600.0
2016-09-01,Phosporic Acid,600.0
2016-10-01,Phosporic Acid,580.0
2016-11-01,Phosporic Acid,580.0
2016-12-01,Phosporic Acid,658.75
2017-01-01,Phosporic Acid,319.95
2017-02-01,Phosporic Acid,319.95
2017-03-01,Phosporic Acid,319.95
2017-04-01,Phosporic Acid,319.95
2017-05-01,Phosporic Acid,319.95
2017-06-01,Phosporic Acid,319.95
2017-07-01,Phosporic Acid,304.43
2017-08-01,Phosporic Acid,304.43
2017-09-01,Phosporic Acid,315.17
2017-10-01,Phosporic Acid,315.17
2017-11-01,Phosporic Acid,315.17
2017-12-01,Phosporic Acid,315.17
2018-01-01,Phosporic Acid,307.53
2018-02-01,Phosporic Acid,307.53
2018-03-01,Phosporic Acid,307.53
2018-04-01,Phosporic Acid,307.53
2018-05-01,Phosporic Acid,307.53
2018-06-01,Phosporic Acid,307.53
2018-07-01,Phosporic Acid,401.24
2018-08-01,Phosporic Acid,394.2
2018-09-01,Phosporic Acid,394.2
2018-10-01,Phosporic Acid,416.67
2018-11-01,Phosporic Acid,419.02
2018-12-01,Phosporic Acid,421.28
2019-01-01,Phosporic Acid,423.63
2019-02-01,Phosporic Acid,424.44
2019-03-01,Phosporic Acid,423.63
2019-04-01,Phosporic Acid,402.03
2019-05-01,Phosporic Acid,410.74
2019-06-01,Phosporic Acid,402.03
2019-07-01,Phosporic Acid,362.61
2019-08-01,Phosporic Acid,362.61
2019-09-01,Phosporic Acid,362.61
2019-10-01,Phosporic Acid,351.0
2019-11-01,Phosporic Acid,351.0
2019-12-01,Phosporic Acid,351.0
2020-01-01,Phosporic Acid,329.94
2020-02-01,Phosporic Acid,329.94
2020-03-01,Phosporic Acid,329.94
2020-04-01,Phosporic Acid,339.12
2020-05-01,Phosporic Acid,339.12
2020-06-01,Phosporic Acid,327.0
2020-07-01,Phosporic Acid,340.56
2020-08-01,Phosporic Acid,337.23
2020-09-01,Phosporic Acid,332.92
2020-10-01,Phosporic Acid,383.4
2020-11-01,Phosporic Acid,367.53
2020-12-01,Phosporic Acid,380.69
2021-01-01,Phosporic Acid,383.4
2021-02-01,Phosporic Acid,440.64
2021-03-01,Phosporic Acid,420.34
2021-04-01,Phosporic Acid,607.23
2021-05-01,Phosporic Acid,550.26
2021-06-01,Phosporic Acid,683.35
2021-07-01,Phosporic Acid,637.74
2021-08-01,Phosporic Acid,637.74
2021-09-01,Phosporic Acid,637.74
2021-10-01,Phosporic Acid,637.74
2021-11-01,Phosporic Acid,729.54
2021-12-01,Phosporic Acid,729.54
2022-01-01,Phosporic Acid,393.95
2022-02-01,Phosporic Acid,393.95
2022-03-01,Phosporic Acid,622.45
2022-04-01,Phosporic Acid,452.27
2022-05-01,Phosporic Acid,452.27
2022-06-01,Phosporic Acid,452.27
2022-07-01,Phosporic Acid,506.22
2022-08-01,Phosporic Acid,506.22
2022-09-01,Phosporic Acid,506.22
2022-10-01,Phosporic Acid,348.75
2022-11-01,Phosporic Acid,348.75
2022-12-01,Phosporic Acid,348.75
2023-01-01,Phosporic Acid,645.84
2023-02-01,Phosporic Acid,578.34
2023-03-01,Phosporic Acid,572.67
2023-04-01,Phosporic Acid,572.67
2023-05-01,Phosporic Acid,572.67
2023-06-01,Phosporic Acid,529.47
2023-07-01,Phosporic Acid,529.47
2023-08-01,Phosporic Acid,464.67
2023-09-01,Phosporic Acid,464.67
2023-10-01,Phosporic Acid,500.52
2023-11-01,Phosporic Acid,537.57
2023-12-01,Phosporic Acid,537.57
2024-01-01,Phosporic Acid,528.39
2024-02-01,Phosporic Acid,528.39
2024-03-01,Phosporic Acid,528.39
2024-04-01,Phosporic Acid,517.59
2024-05-01,Phosporic Acid,517.59
2024-06-01,Phosporic Acid,517.59
2024-07-01,Phosporic Acid,518.67
2024-08-01,Phosporic Acid,518.67
2024-09-01,Phosporic Acid,518.67
2024-10-01,Phosporic Acid,547.88
2024-11-01,Phosporic Acid,578.07
2024-12-01,Phosporic Acid,578.07
2025-01-01,Phosporic Acid,578.07
2025-02-01,Phosporic Acid,573.37
2025-03-01,Phosporic Acid,569.7
2025-04-01,Phosporic Acid,622.62
2025-05-01,Phosporic Acid,622.62
2025-06-01,Phosporic Acid,622.62
2025-07-01,Phosporic Acid,679.32
2025-08-01,Phosporic Acid,679.32
2015-01-01,SP-36,259.15
2015-02-01,SP-36,254.14
2015-03-01,SP-36,254.0
2015-04-01,SP-36,254.0
2015-05-01,SP-36,254.0
2015-06-01,SP-36,254.0
2015-07-01,SP-36,254.0
2015-08-01,SP-36,260.42
2015-09-01,SP-36,260.43
2015-10-01,SP-36,260.43
2015-11-01,SP-36,259.03
2015-12-01,SP-36,257.68
2016-01-01,SP-36,256.52
2016-02-01,SP-36,256.52
2016-03-01,SP-36,225.21
2016-04-01,SP-36,225.21
2016-05-01,SP-36,199.0
2016-06-01,SP-36,211.91
2016-07-01,SP-36,209.38
2016-08-01,SP-36,208.39
2016-09-01,SP-36,208.39
2016-10-01,SP-36,208.39
2016-11-01,SP-36,208.88
2016-12-01,SP-36,209.36
2017-01-01,SP-36,209.86
2017-02-01,SP-36,210.35
2017-03-01,SP-36,210.35
2017-04-01,SP-36,210.35
2017-05-01,SP-36,216.77
2017-06-01,SP-36,218.37
2017-07-01,SP-36,221.3
2017-08-01,SP-36,221.3
2017-09-01,SP-36,219.69
2017-10-01,SP-36,218.37
2017-11-01,SP-36,229.21
2017-12-01,SP-36,237.93
2018-01-01,SP-36,240.38
2018-02-01,SP-36,242.83
2018-03-01,SP-36,249.26
2018-04-01,SP-36,250.65
2018-05-01,SP-36,253.27
2018-06-01,SP-36,260.43
2018-07-01,SP-36,260.43
2018-08-01,SP-36,260.43
2018-09-01,SP-36,260.43
2018-10-01,SP-36,260.43
2018-11-01,SP-36,260.43
2018-12-01,SP-36,260.43
2019-01-01,SP-36,257.17
2019-02-01,SP-36,253.91
2019-03-01,SP-36,250.96
2019-04-01,SP-36,254.56
2019-05-01,SP-36,247.89
2019-06-01,SP-36,241.0
2019-07-01,SP-36,234.33
2019-08-01,SP-36,233.04
2019-09-01,SP-36,223.26
2019-10-01,SP-36,219.41
2019-11-01,SP-36,215.43
2019-12-01,SP-36,213.77
2020-01-01,SP-36,212.05
2020-02-01,SP-36,210.34
2020-03-01,SP-36,209.01
2020-04-01,SP-36,202.25
2020-05-01,SP-36,204.85
2020-06-01,SP-36,210.08
2020-07-01,SP-36,210.08
2020-08-01,SP-36,210.08
2020-09-01,SP-36,198.54
2020-10-01,SP-36,196.88
2020-11-01,SP-36,195.16
2020-12-01,SP-36,193.5
2021-01-01,SP-36,193.5
2021-02-01,SP-36,225.19
2021-03-01,SP-36,253.82
2021-04-01,SP-36,253.82
2021-05-01,SP-36,253.82
2021-06-01,SP-36,253.82
2021-07-01,SP-36,253.82
2021-08-01,SP-36,253.82
2021-09-01,SP-36,253.82
2021-10-01,SP-36,253.82
2021-11-01,SP-36,253.82
2021-12-01,SP-36,253.82
2022-01-01,SP-36,253.82
2022-02-01,SP-36,253.82
2022-03-01,SP-36,253.82
2022-04-01,SP-36,253.82
2022-05-01,SP-36,253.82
2022-06-01,SP-36,253.82
2022-07-01,SP-36,253.82
2022-08-01,SP-36,253.82
2022-09-01,SP-36,253.82
2022-10-01,SP-36,253.82
2022-11-01,SP-36,253.82
2022-12-01,SP-36,253.82
2023-01-01,SP-36,253.82
2023-02-01,SP-36,253.82
2023-03-01,SP-36,253.82
2023-04-01,SP-36,253.82
2023-05-01,SP-36,255.26
2023-06-01,SP-36,255.4
2023-07-01,SP-36,255.4
2023-08-01,SP-36,255.4
2023-09-01,SP-36,256.58
2023-10-01,SP-36,259.11
2023-11-01,SP-36,249.42
2023-12-01,SP-36,250.74
2024-01-01,SP-36,250.74
2024-02-01,SP-36,250.76
2024-03-01,SP-36,259.11
2024-04-01,SP-36,260.43
2024-05-01,SP-36,259.13
2024-06-01,SP-36,256.58
2024-07-01,SP-36,258.47
2024-08-01,SP-36,257.79
2024-09-01,SP-36,257.79
2024-10-01,SP-36,257.79
2024-11-01,SP-36,256.46
2024-12-01,SP-36,256.46
2025-01-01,SP-36,255.81
2025-02-01,SP-36,257.13
2025-03-01,SP-36,257.13
2025-04-01,SP-36,255.81
2025-05-01,SP-36,255.81
2025-06-01,SP-36,255.81
2025-07-01,SP-36,254.49
2025-08-01,SP-36,254.49
2015-01-01,DAP,254.0
2015-02-01,DAP,254.0
2015-03-01,DAP,254.0
2015-04-01,DAP,254.0
2015-05-01,DAP,254.0
2015-06-01,DAP,254.0
2015-07-01,DAP,254.0
2015-08-01,DAP,260.43
2015-09-01,DAP,260.43
2015-10-01,DAP,260.43
2015-11-01,DAP,258.44
2015-12-01,DAP,256.52
2016-01-01,DAP,325.76
2016-02-01,DAP,395.0
2016-03-01,DAP,395.0
2016-04-01,DAP,369.08
2016-05-01,DAP,344.0
2016-06-01,DAP,315.75
2016-07-01,DAP,315.75
2016-08-01,DAP,314.25
2016-09-01,DAP,312.75
2016-10-01,DAP,311.3
2016-11-01,DAP,309.8
2016-12-01,DAP,322.19
2017-01-01,DAP,335.0
2017-02-01,DAP,311.5
2017-03-01,DAP,344.48
2017-04-01,DAP,381.0
2017-05-01,DAP,381.0
2017-06-01,DAP,381.0
2017-07-01,DAP,363.05
2017-08-01,DAP,344.5
2017-09-01,DAP,344.5
2017-10-01,DAP,344.5
2017-11-01,DAP,370.11
2017-12-01,DAP,394.89
2018-01-01,DAP,398.5
2018-02-01,DAP,402.12
2018-03-01,DAP,405.39
2018-04-01,DAP,409.0
2018-05-01,DAP,424.0
2018-06-01,DAP,424.0
2018-07-01,DAP,424.98
2018-08-01,DAP,425.99
2018-09-01,DAP,427.0
2018-10-01,DAP,426.34
2018-11-01,DAP,425.66
2018-12-01,DAP,425.0
2019-01-01,DAP,415.2
2019-02-01,DAP,405.4
2019-03-01,DAP,398.88
2019-04-01,DAP,391.67
2019-05-01,DAP,376.37
2019-06-01,DAP,360.55
2019-07-01,DAP,355.19
2019-08-01,DAP,349.64
2019-09-01,DAP,344.1
2019-10-01,DAP,331.21
2019-11-01,DAP,317.9
2019-12-01,DAP,309.55
2020-01-01,DAP,304.62
2020-02-01,DAP,299.69
2020-03-01,DAP,306.62
2020-04-01,DAP,314.03
2020-05-01,DAP,314.81
2020-06-01,DAP,315.62
2020-07-01,DAP,316.4
2020-08-01,DAP,316.4
2020-09-01,DAP,316.4
2020-10-01,DAP,362.5
2020-11-01,DAP,359.0
2020-12-01,DAP,365.39
2021-01-01,DAP,372.0
2021-02-01,DAP,373.05
2021-03-01,DAP,374.0
2021-04-01,DAP,561.91
2021-05-01,DAP,509.75
2021-06-01,DAP,538.4
2021-07-01,DAP,566.14
2021-08-01,DAP,594.79
2021-09-01,DAP,632.53
2021-10-01,DAP,669.06
2021-11-01,DAP,744.91
2021-12-01,DAP,818.31
2022-01-01,DAP,894.15
2022-02-01,DAP,970.0
2022-03-01,DAP,1015.41
2022-04-01,DAP,1065.69
2022-05-01,DAP,1114.35
2022-06-01,DAP,1090.54
2022-07-01,DAP,1067.5
2022-08-01,DAP,1067.5
2022-09-01,DAP,1041.39
2022-10-01,DAP,1016.11
2022-11-01,DAP,990.0
2022-12-01,DAP,990.0
2023-01-01,DAP,904.17
2023-02-01,DAP,818.35
2023-03-01,DAP,740.83
2023-04-01,DAP,655.0
2023-05-01,DAP,601.53
2023-06-01,DAP,546.28
2023-07-01,DAP,528.98
2023-08-01,DAP,526.82
2023-09-01,DAP,524.67
2023-10-01,DAP,522.58
2023-11-01,DAP,526.2
2023-12-01,DAP,538.03
2024-01-01,DAP,523.24
2024-02-01,DAP,523.24
2024-03-01,DAP,512.0
2024-04-01,DAP,509.84
2024-05-01,DAP,507.76
2024-06-01,DAP,505.6
2024-07-01,DAP,530.47
2024-08-01,DAP,556.11
2024-09-01,DAP,581.74
2024-10-01,DAP,606.55
2024-11-01,DAP,630.5
2024-12-01,DAP,635.43
2025-01-01,DAP,640.52
2025-02-01,DAP,645.61
2025-03-01,DAP,650.21
2025-04-01,DAP,655.3
2025-05-01,DAP,676.18
2025-06-01,DAP,697.75
2025-07-01,DAP,718.63
2025-08-01,DAP,718.63
2015-01-01,Ammonia,569.96
2015-02-01,Ammonia,504.86
2015-03-01,Ammonia,495.43
2015-04-01,Ammonia,466.97
2015-05-01,Ammonia,444.92
2015-06-01,Ammonia,436.78
2015-07-01,Ammonia,451.85
2015-08-01,Ammonia,439.0
2015-09-01,Ammonia,453.7
2015-10-01,Ammonia,465.75
2015-11-01,Ammonia,462.8
2015-12-01,Ammonia,446.01
2016-01-01,Ammonia,409.56
2016-02-01,Ammonia,362.34
2016-03-01,Ammonia,365.52
2016-04-01,Ammonia,372.81
2016-05-01,Ammonia,379.63
2016-06-01,Ammonia,366.47
2016-07-01,Ammonia,350.14
2016-08-01,Ammonia,329.03
2016-09-01,Ammonia,275.74
2016-10-01,Ammonia,249.23
2016-11-01,Ammonia,233.95
2016-12-01,Ammonia,239.95
2017-01-01,Ammonia,257.22
2017-02-01,Ammonia,291.08
2017-03-01,Ammonia,356.15
2017-04-01,Ammonia,386.74
2017-05-01,Ammonia,391.89
2017-06-01,Ammonia,335.85
2017-07-01,Ammonia,253.25
2017-08-01,Ammonia,250.94
2017-09-01,Ammonia,269.78
2017-10-01,Ammonia,284.56
2017-11-01,Ammonia,337.67
2017-12-01,Ammonia,360.03
2018-01-01,Ammonia,367.42
2018-02-01,Ammonia,361.66
2018-03-01,Ammonia,325.49
2018-04-01,Ammonia,312.47
2018-05-01,Ammonia,322.79
2018-06-01,Ammonia,337.13
2018-07-01,Ammonia,348.21
2018-08-01,Ammonia,369.63
2018-09-01,Ammonia,382.42
2018-10-01,Ammonia,395.75
2018-11-01,Ammonia,395.38
2018-12-01,Ammonia,380.48
2019-01-01,Ammonia,350.61
2019-02-01,Ammonia,312.56
2019-03-01,Ammonia,303.2
2019-04-01,Ammonia,292.83
2019-05-01,Ammonia,282.8
2019-06-01,Ammonia,272.44
2019-07-01,Ammonia,262.26
2019-08-01,Ammonia,266.06
2019-09-01,Ammonia,282.62
2019-10-01,Ammonia,294.0
2019-11-01,Ammonia,291.88
2019-12-01,Ammonia,277.5
2020-01-01,Ammonia,291.5
2020-02-01,Ammonia,295.75
2020-03-01,Ammonia,287.85
2020-04-01,Ammonia,279.41
2020-05-01,Ammonia,271.24
2020-06-01,Ammonia,262.8
2020-07-01,Ammonia,254.63
2020-08-01,Ammonia,275.5
2020-09-01,Ammonia,285.52
2020-10-01,Ammonia,292.15
2020-11-01,Ammonia,299.01
2020-12-01,Ammonia,293.53
2021-01-01,Ammonia,326.96
2021-02-01,Ammonia,360.39
2021-03-01,Ammonia,400.76
2021-04-01,Ammonia,499.38
2021-05-01,Ammonia,580.95
2021-06-01,Ammonia,617.15
2021-07-01,Ammonia,638.05
2021-08-01,Ammonia,659.65
2021-09-01,Ammonia,657.79
2021-10-01,Ammonia,646.94
2021-11-01,Ammonia,615.04
2021-12-01,Ammonia,656.92
2022-01-01,Ammonia,700.2
2022-02-01,Ammonia,771.48
2022-03-01,Ammonia,769.66
2022-04-01,Ammonia,485.92
2022-05-01,Ammonia,852.15
2022-06-01,Ammonia,844.38
2022-07-01,Ammonia,470.79
2022-08-01,Ammonia,687.55
2022-09-01,Ammonia,775.41
2022-10-01,Ammonia,746.27
2022-11-01,Ammonia,722.25
2022-12-01,Ammonia,717.62
2023-01-01,Ammonia,702.04
2023-02-01,Ammonia,686.46
2023-03-01,Ammonia,681.65
2023-04-01,Ammonia,464.72
2023-05-01,Ammonia,328.16
2023-06-01,Ammonia,312.68
2023-07-01,Ammonia,342.11
2023-08-01,Ammonia,338.52
2023-09-01,Ammonia,363.12
2023-10-01,Ammonia,422.29
2023-11-01,Ammonia,435.38
2023-12-01,Ammonia,438.94
2024-01-01,Ammonia,438.12
2024-02-01,Ammonia,411.94
2024-03-01,Ammonia,414.32
2024-04-01,Ammonia,408.73
2024-05-01,Ammonia,379.65
2024-06-01,Ammonia,366.98
2024-07-01,Ammonia,397.83
2024-08-01,Ammonia,399.88
2024-09-01,Ammonia,384.63
2024-10-01,Ammonia,361.79
2024-11-01,Ammonia,376.19
2024-12-01,Ammonia,379.05
2025-01-01,Ammonia,414.05
2025-02-01,Ammonia,415.82
2025-03-01,Ammonia,407.15
2025-04-01,Ammonia,369.46
2025-05-01,Ammonia,338.56
2025-06-01,Ammonia,339.96
2025-07-01,Ammonia,293.99
2025-08-01,Ammonia,300.13
2015-01-01,ZA,141.79
2015-02-01,ZA,141.75
2015-03-01,ZA,142.59
2015-04-01,ZA,142.83
2015-05-01,ZA,141.17
2015-06-01,ZA,142.41
2015-07-01,ZA,143.73
2015-08-01,ZA,148.25
2015-09-01,ZA,144.76
2015-10-01,ZA,135.0
2015-11-01,ZA,134.67
2015-12-01,ZA,128.05
2016-01-01,ZA,125.44
2016-02-01,ZA,111.12
2016-03-01,ZA,110.5
2016-04-01,ZA,112.14
2016-05-01,ZA,111.75
2016-06-01,ZA,112.4
2016-07-01,ZA,113.0
2016-08-01,ZA,110.86
2016-09-01,ZA,111.25
2016-10-01,ZA,107.5
2016-11-01,ZA,105.05
2016-12-01,ZA,109.39
2017-01-01,ZA,116.39
2017-02-01,ZA,119.21
2017-03-01,ZA,121.76
2017-04-01,ZA,120.73
2017-05-01,ZA,119.23
2017-06-01,ZA,120.0
2017-07-01,ZA,120.2
2017-08-01,ZA,121.13
2017-09-01,ZA,121.62
2017-10-01,ZA,124.5
2017-11-01,ZA,128.64
2017-12-01,ZA,128.5
2018-01-01,ZA,129.5
2018-02-01,ZA,133.02
2018-03-01,ZA,133.5
2018-04-01,ZA,134.37
2018-05-01,ZA,126.19
2018-06-01,ZA,128.52
2018-07-01,ZA,132.3
2018-08-01,ZA,135.55
2018-09-01,ZA,136.36
2018-10-01,ZA,137.5
2018-11-01,ZA,140.83
2018-12-01,ZA,139.7
2019-01-01,ZA,138.5
2019-02-01,ZA,135.25
2019-03-01,ZA,133.69
2019-04-01,ZA,132.38
2019-05-01,ZA,130.71
2019-06-01,ZA,131.75
2019-07-01,ZA,132.67
2019-08-01,ZA,134.65
2019-09-01,ZA,132.1
2019-10-01,ZA,125.75
2019-11-01,ZA,123.7
2019-12-01,ZA,115.33
2020-01-01,ZA,112.0
2020-02-01,ZA,110.0
2020-03-01,ZA,109.69
2020-04-01,ZA,115.25
2020-05-01,ZA,110.34
2020-06-01,ZA,105.28
2020-07-01,ZA,100.37
2020-08-01,ZA,111.45
2020-09-01,ZA,113.5
2020-10-01,ZA,115.49
2020-11-01,ZA,118.32
2020-12-01,ZA,119.56
2021-01-01,ZA,119.49
2021-02-01,ZA,142.62
2021-03-01,ZA,120.4
2021-04-01,ZA,192.0
2021-05-01,ZA,185.12
2021-06-01,ZA,188.46
2021-07-01,ZA,190.33
2021-08-01,ZA,213.36
2021-09-01,ZA,236.39
2021-10-01,ZA,255.53
2021-11-01,ZA,374.13
2021-12-01,ZA,446.11
2022-01-01,ZA,460.0
2022-02-01,ZA,460.0
2022-03-01,ZA,426.4
2022-04-01,ZA,389.2
2022-05-01,ZA,353.2
2022-06-01,ZA,316.0
2022-07-01,ZA,316.0
2022-08-01,ZA,250.0
2022-09-01,ZA,248.48
2022-10-01,ZA,247.02
2022-11-01,ZA,245.5
2022-12-01,ZA,224.11
2023-01-01,ZA,202.0
2023-02-01,ZA,202.0
2023-03-01,ZA,202.0
2023-04-01,ZA,202.0
2023-05-01,ZA,173.98
2023-06-01,ZA,145.02
2023-07-01,ZA,117.0
2023-08-01,ZA,117.0
2023-09-01,ZA,117.0
2023-10-01,ZA,130.62
2023-11-01,ZA,144.69
2023-12-01,ZA,180.95
2024-01-01,ZA,171.48
2024-02-01,ZA,162.0
2024-03-01,ZA,129.57
2024-04-01,ZA,131.69
2024-05-01,ZA,133.75
2024-06-01,ZA,133.75
2024-07-01,ZA,133.75
2024-08-01,ZA,162.0
2024-09-01,ZA,157.4
2024-10-01,ZA,149.29
2024-11-01,ZA,153.55
2024-12-01,ZA,147.62
2025-01-01,ZA,148.6
2025-02-01,ZA,156.99
2025-03-01,ZA,160.68
2025-04-01,ZA,154.75
2025-05-01,ZA,170.25
2025-06-01,ZA,168.0
2025-07-01,ZA,196.75
2025-08-01,ZA,192.88
2015-01-01,Al(OH)3,334.5
2015-02-01,Al(OH)3,334.5
2015-03-01,Al(OH)3,334.5
2015-04-01,Al(OH)3,334.5
2015-05-01,Al(OH)3,334.5
2015-06-01,Al(OH)3,334.5
2015-07-01,Al(OH)3,334.5
2015-08-01,Al(OH)3,334.5
2015-09-01,Al(OH)3,334.5
2015-10-01,Al(OH)3,334.5
2015-11-01,Al(OH)3,334.5
2015-12-01,Al(OH)3,334.5
2016-01-01,Al(OH)3,330.0
2016-02-01,Al(OH)3,330.0
2016-03-01,Al(OH)3,330.0
2016-04-01,Al(OH)3,330.0
2016-05-01,Al(OH)3,330.0
2016-06-01,Al(OH)3,330.0
2016-07-01,Al(OH)3,330.0
2016-08-01,Al(OH)3,330.0
2016-09-01,Al(OH)3,330.0
2016-10-01,Al(OH)3,330.0
2016-11-01,Al(OH)3,330.0
2016-12-01,Al(OH)3,330.0
2017-01-01,Al(OH)3,330.0
2017-02-01,Al(OH)3,330.0
2017-03-01,Al(OH)3,330.0
2017-04-01,Al(OH)3,330.0
2017-05-01,Al(OH)3,330.0
2017-06-01,Al(OH)3,330.0
2017-07-01,Al(OH)3,330.0
2017-08-01,Al(OH)3,330.0
2017-09-01,Al(OH)3,325.0
2017-10-01,Al(OH)3,325.0
2017-11-01,Al(OH)3,325.0
2017-12-01,Al(OH)3,327.57
2018-01-01,Al(OH)3,328.58
2018-02-01,Al(OH)3,325.0
2018-03-01,Al(OH)3,328.46
2018-04-01,Al(OH)3,325.0
2018-05-01,Al(OH)3,328.46
2018-06-01,Al(OH)3,328.46
2018-07-01,Al(OH)3,328.46
2018-08-01,Al(OH)3,330.0
2018-09-01,Al(OH)3,330.0
2018-10-01,Al(OH)3,348.13
2018-11-01,Al(OH)3,366.87
2018-12-01,Al(OH)3,385.0
2019-01-01,Al(OH)3,385.0
2019-02-01,Al(OH)3,385.0
2019-03-01,Al(OH)3,385.0
2019-04-01,Al(OH)3,385.0
2019-05-01,Al(OH)3,385.0
2019-06-01,Al(OH)3,385.0
2019-07-01,Al(OH)3,385.0
2019-08-01,Al(OH)3,385.0
2019-09-01,Al(OH)3,385.0
2019-10-01,Al(OH)3,385.0
2019-11-01,Al(OH)3,385.0
2019-12-01,Al(OH)3,385.0
2020-01-01,Al(OH)3,376.11
2020-02-01,Al(OH)3,367.21
2020-03-01,Al(OH)3,358.89
2020-04-01,Al(OH)3,350.0
2020-05-01,Al(OH)3,350.0
2020-06-01,Al(OH)3,350.0
2020-07-01,Al(OH)3,350.0
2020-08-01,Al(OH)3,350.0
2020-09-01,Al(OH)3,350.0
2020-10-01,Al(OH)3,350.0
2020-11-01,Al(OH)3,350.0
2020-12-01,Al(OH)3,350.0
2021-01-01,Al(OH)3,349.74
2021-02-01,Al(OH)3,349.49
2021-03-01,Al(OH)3,349.26
2021-04-01,Al(OH)3,362.64
2021-05-01,Al(OH)3,348.76
2021-06-01,Al(OH)3,348.5
2021-07-01,Al(OH)3,348.26
2021-08-01,Al(OH)3,348.0
2021-09-01,Al(OH)3,341.72
2021-10-01,Al(OH)3,335.64
2021-11-01,Al(OH)3,329.36
2021-12-01,Al(OH)3,323.28
2022-01-01,Al(OH)3,317.0
2022-02-01,Al(OH)3,317.0
2022-03-01,Al(OH)3,317.0
2022-04-01,Al(OH)3,317.0
2022-05-01,Al(OH)3,317.0
2022-06-01,Al(OH)3,317.0
2022-07-01,Al(OH)3,376.04
2022-08-01,Al(OH)3,437.04
2022-09-01,Al(OH)3,437.04
2022-10-01,Al(OH)3,437.04
2022-11-01,Al(OH)3,437.04
2022-12-01,Al(OH)3,437.04
2023-01-01,Al(OH)3,437.04
2023-02-01,Al(OH)3,382.0
2023-03-01,Al(OH)3,382.0
2023-04-01,Al(OH)3,382.0
2023-05-01,Al(OH)3,382.0
2023-06-01,Al(OH)3,380.87
2023-07-01,Al(OH)3,380.73
2023-08-01,Al(OH)3,380.87
2023-09-01,Al(OH)3,380.87
2023-10-01,Al(OH)3,366.22
2023-11-01,Al(OH)3,366.22
2023-12-01,Al(OH)3,366.22
2024-01-01,Al(OH)3,366.22
2024-02-01,Al(OH)3,355.2
2024-03-01,Al(OH)3,346.13
2024-04-01,Al(OH)3,346.13
2024-05-01,Al(OH)3,346.13
2024-06-01,Al(OH)3,383.84
2024-07-01,Al(OH)3,383.84
2024-08-01,Al(OH)3,383.84
2024-09-01,Al(OH)3,383.84
2024-10-01,Al(OH)3,383.84
2024-11-01,Al(OH)3,383.84
2024-12-01,Al(OH)3,383.84
2025-01-01,Al(OH)3,383.84
2025-02-01,Al(OH)3,527.5
2025-03-01,Al(OH)3,543.33
2025-04-01,Al(OH)3,543.33
2025-05-01,Al(OH)3,538.04
2025-06-01,Al(OH)3,531.85
2025-07-01,Al(OH)3,505.24
2025-08-01,Al(OH)3,535.37
2015-01-01,NPKs Baltic Sea 15-15-15 FOB,345.0
2015-02-01,NPKs Baltic Sea 15-15-15 FOB,345.0
2015-03-01,NPKs Baltic Sea 15-15-15 FOB,333.0
2015-04-01,NPKs Baltic Sea 15-15-15 FOB,330.0
2015-05-01,NPKs Baltic Sea 15-15-15 FOB,330.0
2015-06-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2015-07-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2015-08-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2015-09-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2015-10-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2015-11-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2015-12-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2016-01-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2016-02-01,NPKs Baltic Sea 15-15-15 FOB,322.0
2016-03-01,NPKs Baltic Sea 15-15-15 FOB,309.0
2016-04-01,NPKs Baltic Sea 15-15-15 FOB,258.0
2016-05-01,NPKs Baltic Sea 15-15-15 FOB,245.0
2016-06-01,NPKs Baltic Sea 15-15-15 FOB,265.0
2016-07-01,NPKs Baltic Sea 15-15-15 FOB,265.0
2016-08-01,NPKs Baltic Sea 15-15-15 FOB,264.0
2016-09-01,NPKs Baltic Sea 15-15-15 FOB,257.0
2016-10-01,NPKs Baltic Sea 15-15-15 FOB,251.0
2016-11-01,NPKs Baltic Sea 15-15-15 FOB,250.0
2016-12-01,NPKs Baltic Sea 15-15-15 FOB,250.0
2017-01-01,NPKs Baltic Sea 15-15-15 FOB,251.0
2017-02-01,NPKs Baltic Sea 15-15-15 FOB,255.0
2017-03-01,NPKs Baltic Sea 15-15-15 FOB,258.0
2017-04-01,NPKs Baltic Sea 15-15-15 FOB,257.0
2017-05-01,NPKs Baltic Sea 15-15-15 FOB,255.0
2017-06-01,NPKs Baltic Sea 15-15-15 FOB,255.0
2017-07-01,NPKs Baltic Sea 15-15-15 FOB,255.0
2017-08-01,NPKs Baltic Sea 15-15-15 FOB,257.0
2017-09-01,NPKs Baltic Sea 15-15-15 FOB,258.0
2017-10-01,NPKs Baltic Sea 15-15-15 FOB,262.0
2017-11-01,NPKs Baltic Sea 15-15-15 FOB,263.0
2017-12-01,NPKs Baltic Sea 15-15-15 FOB,265.0
2018-01-01,NPKs Baltic Sea 15-15-15 FOB,265.0
2018-02-01,NPKs Baltic Sea 15-15-15 FOB,264.0
2018-03-01,NPKs Baltic Sea 15-15-15 FOB,274.0
2018-04-01,NPKs Baltic Sea 15-15-15 FOB,274.0
2018-05-01,NPKs Baltic Sea 15-15-15 FOB,272.0
2018-06-01,NPKs Baltic Sea 15-15-15 FOB,273.0
2018-07-01,NPKs Baltic Sea 15-15-15 FOB,278.0
2018-08-01,NPKs Baltic Sea 15-15-15 FOB,284.0
2018-09-01,NPKs Baltic Sea 15-15-15 FOB,290.0
2018-10-01,NPKs Baltic Sea 15-15-15 FOB,290.0
2018-11-01,NPKs Baltic Sea 15-15-15 FOB,296.0
2018-12-01,NPKs Baltic Sea 15-15-15 FOB,297.0
2019-01-01,NPKs Baltic Sea 15-15-15 FOB,298.0
2019-02-01,NPKs Baltic Sea 15-15-15 FOB,295.0
2019-03-01,NPKs Baltic Sea 15-15-15 FOB,293.0
2019-04-01,NPKs Baltic Sea 15-15-15 FOB,293.0
2019-05-01,NPKs Baltic Sea 15-15-15 FOB,290.0
2019-06-01,NPKs Baltic Sea 15-15-15 FOB,288.0
2019-07-01,NPKs Baltic Sea 15-15-15 FOB,283.0
2019-08-01,NPKs Baltic Sea 15-15-15 FOB,281.0
2019-09-01,NPKs Baltic Sea 15-15-15 FOB,277.0
2019-10-01,NPKs Baltic Sea 15-15-15 FOB,273.0
2019-11-01,NPKs Baltic Sea 15-15-15 FOB,267.0
2019-12-01,NPKs Baltic Sea 15-15-15 FOB,260.0
2020-01-01,NPKs Baltic Sea 15-15-15 FOB,254.0
2020-02-01,NPKs Baltic Sea 15-15-15 FOB,253.0
2020-03-01,NPKs Baltic Sea 15-15-15 FOB,255.0
2020-04-01,NPKs Baltic Sea 15-15-15 FOB,255.0
2020-05-01,NPKs Baltic Sea 15-15-15 FOB,255.0
2020-06-01,NPKs Baltic Sea 15-15-15 FOB,254.0
2020-07-01,NPKs Baltic Sea 15-15-15 FOB,251.0
2020-08-01,NPKs Baltic Sea 15-15-15 FOB,252.0
2020-09-01,NPKs Baltic Sea 15-15-15 FOB,258.0
2020-10-01,NPKs Baltic Sea 15-15-15 FOB,260.0
2020-11-01,NPKs Baltic Sea 15-15-15 FOB,259.0
2020-12-01,NPKs Baltic Sea 15-15-15 FOB,258.0
2021-01-01,NPKs Baltic Sea 15-15-15 FOB,266.0
2021-02-01,NPKs Baltic Sea 15-15-15 FOB,292.0
2021-03-01,NPKs Baltic Sea 15-15-15 FOB,305.0
2021-04-01,NPKs Baltic Sea 15-15-15 FOB,328.0
2021-05-01,NPKs Baltic Sea 15-15-15 FOB,348.0
2021-06-01,NPKs Baltic Sea 15-15-15 FOB,375.0
2021-07-01,NPKs Baltic Sea 15-15-15 FOB,421.0
2021-08-01,NPKs Baltic Sea 15-15-15 FOB,435.0
2021-09-01,NPKs Baltic Sea 15-15-15 FOB,423.0
2021-10-01,NPKs Baltic Sea 15-15-15 FOB,493.0
2021-11-01,NPKs Baltic Sea 15-15-15 FOB,563.0
2021-12-01,NPKs Baltic Sea 15-15-15 FOB,585.0
2022-01-01,NPKs Baltic Sea 15-15-15 FOB,606.0
2022-02-01,NPKs Baltic Sea 15-15-15 FOB,618.0
2022-03-01,NPKs Baltic Sea 15-15-15 FOB,740.0
2022-04-01,NPKs Baltic Sea 15-15-15 FOB,785.0
2022-05-01,NPKs Baltic Sea 15-15-15 FOB,783.0
2022-06-01,NPKs Baltic Sea 15-15-15 FOB,739.0
2022-07-01,NPKs Baltic Sea 15-15-15 FOB,705.0
2022-08-01,NPKs Baltic Sea 15-15-15 FOB,678.0
2022-09-01,NPKs Baltic Sea 15-15-15 FOB,652.0
2022-10-01,NPKs Baltic Sea 15-15-15 FOB,625.0
2022-11-01,NPKs Baltic Sea 15-15-15 FOB,579.0
2022-12-01,NPKs Baltic Sea 15-15-15 FOB,555.0
2023-01-01,NPKs Baltic Sea 15-15-15 FOB,534.0
2023-02-01,NPKs Baltic Sea 15-15-15 FOB,523.0
2023-03-01,NPKs Baltic Sea 15-15-15 FOB,515.0
2023-04-01,NPKs Baltic Sea 15-15-15 FOB,491.0
2023-05-01,NPKs Baltic Sea 15-15-15 FOB,427.0
2023-06-01,NPKs Baltic Sea 15-15-15 FOB,408.0
2023-07-01,NPKs Baltic Sea 15-15-15 FOB,408.0
2023-08-01,NPKs Baltic Sea 15-15-15 FOB,408.0
2023-09-01,NPKs Baltic Sea 15-15-15 FOB,428.0
2023-10-01,NPKs Baltic Sea 15-15-15 FOB,435.0
2023-11-01,NPKs Baltic Sea 15-15-15 FOB,435.0
2023-12-01,NPKs Baltic Sea 15-15-15 FOB,422.0
2024-01-01,NPKs Baltic Sea 15-15-15 FOB,415.0
2024-02-01,NPKs Baltic Sea 15-15-15 FOB,415.0
2024-03-01,NPKs Baltic Sea 15-15-15 FOB,415.0
2024-04-01,NPKs Baltic Sea 15-15-15 FOB,415.0
2024-05-01,NPKs Baltic Sea 15-15-15 FOB,415.0
2024-06-01,NPKs Baltic Sea 15-15-15 FOB,415.0
2024-07-01,NPKs Baltic Sea 15-15-15 FOB,410.0
2024-08-01,NPKs Baltic Sea 15-15-15 FOB,410.0
2024-09-01,NPKs Baltic Sea 15-15-15 FOB,396.0
2024-10-01,NPKs Baltic Sea 15-15-15 FOB,355.0
2024-11-01,NPKs Baltic Sea 15-15-15 FOB,359.0
2024-12-01,NPKs Baltic Sea 15-15-15 FOB,355.0
2025-01-01,NPKs Baltic Sea 15-15-15 FOB,355.0
2025-02-01,NPKs Baltic Sea 15-15-15 FOB,355.0
2025-03-01,NPKs Baltic Sea 15-15-15 FOB,360.0
2025-04-01,NPKs Baltic Sea 15-15-15 FOB,375.0
2025-05-01,NPKs Baltic Sea 15-15-15 FOB,386.0
2025-06-01,NPKs Baltic Sea 15-15-15 FOB,413.0
2025-07-01,NPKs Baltic Sea 15-15-15 FOB,424.0
2025-08-01,NPKs Baltic Sea 15-15-15 FOB,423.0
2015-01-01,NPKs India 20-20-0-13 CFR,337.6
2015-02-01,NPKs India 20-20-0-13 CFR,337.6
2015-03-01,NPKs India 20-20-0-13 CFR,308.4
2015-04-01,NPKs India 20-20-0-13 CFR,279.8
2015-05-01,NPKs India 20-20-0-13 CFR,279.8
2015-06-01,NPKs India 20-20-0-13 CFR,279.8
2015-07-01,NPKs India 20-20-0-13 CFR,279.8
2015-08-01,NPKs India 20-20-0-13 CFR,279.8
2015-09-01,NPKs India 20-20-0-13 CFR,279.8
2015-10-01,NPKs India 20-20-0-13 CFR,279.8
2015-11-01,NPKs India 20-20-0-13 CFR,279.8
2015-12-01,NPKs India 20-20-0-13 CFR,283.6
2016-01-01,NPKs India 20-20-0-13 CFR,255.0
2016-02-01,NPKs India 20-20-0-13 CFR,255.0
2016-03-01,NPKs India 20-20-0-13 CFR,255.0
2016-04-01,NPKs India 20-20-0-13 CFR,255.0
2016-05-01,NPKs India 20-20-0-13 CFR,255.0
2016-06-01,NPKs India 20-20-0-13 CFR,255.0
2016-07-01,NPKs India 20-20-0-13 CFR,255.0
2016-08-01,NPKs India 20-20-0-13 CFR,255.0
2016-09-01,NPKs India 20-20-0-13 CFR,255.0
2016-10-01,NPKs India 20-20-0-13 CFR,255.0
2016-11-01,NPKs India 20-20-0-13 CFR,255.0
2016-12-01,NPKs India 20-20-0-13 CFR,255.0
2017-01-01,NPKs India 20-20-0-13 CFR,255.0
2017-02-01,NPKs India 20-20-0-13 CFR,269.0
2017-03-01,NPKs India 20-20-0-13 CFR,268.0
2017-04-01,NPKs India 20-20-0-13 CFR,268.0
2017-05-01,NPKs India 20-20-0-13 CFR,268.0
2017-06-01,NPKs India 20-20-0-13 CFR,268.0
2017-07-01,NPKs India 20-20-0-13 CFR,264.0
2017-08-01,NPKs India 20-20-0-13 CFR,263.0
2017-09-01,NPKs India 20-20-0-13 CFR,267.0
2017-10-01,NPKs India 20-20-0-13 CFR,269.0
2017-11-01,NPKs India 20-20-0-13 CFR,271.0
2017-12-01,NPKs India 20-20-0-13 CFR,273.0
2018-01-01,NPKs India 20-20-0-13 CFR,283.0
2018-02-01,NPKs India 20-20-0-13 CFR,283.0
2018-03-01,NPKs India 20-20-0-13 CFR,289.0
2018-04-01,NPKs India 20-20-0-13 CFR,293.0
2018-05-01,NPKs India 20-20-0-13 CFR,297.0
2018-06-01,NPKs India 20-20-0-13 CFR,298.0
2018-07-01,NPKs India 20-20-0-13 CFR,298.0
2018-08-01,NPKs India 20-20-0-13 CFR,303.0
2018-09-01,NPKs India 20-20-0-13 CFR,313.0
2018-10-01,NPKs India 20-20-0-13 CFR,313.0
2018-11-01,NPKs India 20-20-0-13 CFR,313.0
2018-12-01,NPKs India 20-20-0-13 CFR,313.0
2019-01-01,NPKs India 20-20-0-13 CFR,313.0
2019-02-01,NPKs India 20-20-0-13 CFR,313.0
2019-03-01,NPKs India 20-20-0-13 CFR,308.0
2019-04-01,NPKs India 20-20-0-13 CFR,303.0
2019-05-01,NPKs India 20-20-0-13 CFR,303.0
2019-06-01,NPKs India 20-20-0-13 CFR,299.0
2019-07-01,NPKs India 20-20-0-13 CFR,288.0
2019-08-01,NPKs India 20-20-0-13 CFR,290.0
2019-09-01,NPKs India 20-20-0-13 CFR,288.0
2019-10-01,NPKs India 20-20-0-13 CFR,274.0
2019-11-01,NPKs India 20-20-0-13 CFR,267.0
2019-12-01,NPKs India 20-20-0-13 CFR,263.0
2020-01-01,NPKs India 20-20-0-13 CFR,263.0
2020-02-01,NPKs India 20-20-0-13 CFR,274.0
2020-03-01,NPKs India 20-20-0-13 CFR,278.0
2020-04-01,NPKs India 20-20-0-13 CFR,268.0
2020-05-01,NPKs India 20-20-0-13 CFR,265.0
2020-06-01,NPKs India 20-20-0-13 CFR,265.0
2020-07-01,NPKs India 20-20-0-13 CFR,263.0
2020-08-01,NPKs India 20-20-0-13 CFR,263.0
2020-09-01,NPKs India 20-20-0-13 CFR,262.0
2020-10-01,NPKs India 20-20-0-13 CFR,265.0
2020-11-01,NPKs India 20-20-0-13 CFR,268.0
2020-12-01,NPKs India 20-20-0-13 CFR,261.0
2021-01-01,NPKs India 20-20-0-13 CFR,287.0
2021-02-01,NPKs India 20-20-0-13 CFR,312.0
2021-03-01,NPKs India 20-20-0-13 CFR,326.0
2021-04-01,NPKs India 20-20-0-13 CFR,375.0
2021-05-01,NPKs India 20-20-0-13 CFR,389.0
2021-06-01,NPKs India 20-20-0-13 CFR,401.0
2021-07-01,NPKs India 20-20-0-13 CFR,442.0
2021-08-01,NPKs India 20-20-0-13 CFR,445.0
2021-09-01,NPKs India 20-20-0-13 CFR,450.0
2021-10-01,NPKs India 20-20-0-13 CFR,451.0
2021-11-01,NPKs India 20-20-0-13 CFR,451.0
2021-12-01,NPKs India 20-20-0-13 CFR,569.03
2022-01-01,NPKs India 20-20-0-13 CFR,691.0
2022-02-01,NPKs India 20-20-0-13 CFR,664.0
2022-03-01,NPKs India 20-20-0-13 CFR,677.0
2022-04-01,NPKs India 20-20-0-13 CFR,682.0
2022-05-01,NPKs India 20-20-0-13 CFR,707.0
2022-06-01,NPKs India 20-20-0-13 CFR,716.0
2022-07-01,NPKs India 20-20-0-13 CFR,711.0
2022-08-01,NPKs India 20-20-0-13 CFR,643.0
2022-09-01,NPKs India 20-20-0-13 CFR,609.0
2022-10-01,NPKs India 20-20-0-13 CFR,590.0
2022-11-01,NPKs India 20-20-0-13 CFR,590.0
2022-12-01,NPKs India 20-20-0-13 CFR,590.0
2023-01-01,NPKs India 20-20-0-13 CFR,514.0
2023-02-01,NPKs India 20-20-0-13 CFR,468.0
2023-03-01,NPKs India 20-20-0-13 CFR,455.0
2023-04-01,NPKs India 20-20-0-13 CFR,407.0
2023-05-01,NPKs India 20-20-0-13 CFR,360.0
2023-06-01,NPKs India 20-20-0-13 CFR,357.0
2023-07-01,NPKs India 20-20-0-13 CFR,355.0
2023-08-01,NPKs India 20-20-0-13 CFR,379.0
2023-09-01,NPKs India 20-20-0-13 CFR,415.0
2023-10-01,NPKs India 20-20-0-13 CFR,424.0
2023-11-01,NPKs India 20-20-0-13 CFR,398.0
2023-12-01,NPKs India 20-20-0-13 CFR,379.0
2024-01-01,NPKs India 20-20-0-13 CFR,367.0
2024-02-01,NPKs India 20-20-0-13 CFR,370.0
2024-03-01,NPKs India 20-20-0-13 CFR,372.0
2024-04-01,NPKs India 20-20-0-13 CFR,371.0
2024-05-01,NPKs India 20-20-0-13 CFR,353.0
2024-06-01,NPKs India 20-20-0-13 CFR,353.0
2024-07-01,NPKs India 20-20-0-13 CFR,360.0
2024-08-01,NPKs India 20-20-0-13 CFR,360.0
2024-09-01,NPKs India 20-20-0-13 CFR,397.0
2024-10-01,NPKs India 20-20-0-13 CFR,397.0
2024-11-01,NPKs India 20-20-0-13 CFR,398.0
2024-12-01,NPKs India 20-20-0-13 CFR,401.0
2025-01-01,NPKs India 20-20-0-13 CFR,398.0
2025-02-01,NPKs India 20-20-0-13 CFR,399.0
2025-03-01,NPKs India 20-20-0-13 CFR,404.0
2025-04-01,NPKs India 20-20-0-13 CFR,428.0
2025-05-01,NPKs India 20-20-0-13 CFR,439.0
2025-06-01,NPKs India 20-20-0-13 CFR,449.0
2025-07-01,NPKs India 20-20-0-13 CFR,464.0
2025-08-01,NPKs India 20-20-0-13 CFR,469.0
`; //

export async function GET() {
  try {
    const priceData: Array<{ date: string; material: string; price: number; source: 'global' | 'realisasi' }> = []

    // Mapping label material global -> label tampilan
    const materialMapping: Record<string, string> = {
      // Urea
      'Urea Indonesia FOB': 'Urea Indonesia',
      'Urea China FOB': 'Urea China',
      'Urea Southeast Asia CFR': 'Urea SE Asia',

      // ZA
      'ZA Granular China FOB': 'ZA China',
      'ZA Standard Southeast Asia CFR': 'ZA SE Asia',

      // Ammonia
      'Ammonia Southeast Asia FOB': 'Ammonia SE Asia(FOB)',
      'Ammonia Southeast Asia CFR': 'Ammonia SE Asia (CFR)',

      // Phosphoric Acid
      'PA India CFR': 'Phosphoric Acid',

      // Phosphate Rock
      'PR Moroco (68-72% BPL) FOB': 'PR Morocco (68-72%)',
      'PR Jordan (66-72% BPL) FOB': 'PR Jordan (66-72%)',
      'PR Jordan (73-75% BPL) FOB': 'PR Jordan (73-75%)',

      // Potash
      'Potash Standard Vancouver FOB': 'Potash Vancouver',
      'Potash Standard Southeast Asia CFR': 'Potash SE Asia',

      // Sulphur & Sulphuric Acid
      'Sulphur Middle East FOB': 'Sulphur Middle East',
      'Sulphur India ex Middle East CFR': 'Sulphur India (CFR)',
      'Sulphur Indonesia CFR': 'Sulphur Indonesia',
      'Sulphuric Acid Japan/South Korea FOB': 'Sulphuric Acid Japan/South Korea',

      // NPK
      'NPKs Baltic Sea 15-15-15 FOB': 'NPK 15-15-15',
      'NPKs India 20-20-0-13 CFR': 'NPK 20-20-0-13',
    }

    // Whitelist material untuk seri realisasi dengan fill gradient
    const realisasiWhitelist = new Set([
      'Sulphur',
      'Sulfuric Acid',
      'KCl/MOP',
      'Phospate Rock',
      'Phosporic Acid',
      'SP-36',
      'DAP',
      'Ammonia',
      'ZA',
      'Al(OH)3',
      'NPKs Baltic Sea 15-15-15 FOB',
      'NPKs India 20-20-0-13 CFR',
    ])

    // 1) Parse GLOBAL dari csvFileContent (MonthYear,Material,Price)
    {
      const rows = csvFileContent.trim().split('\n')
      // skip header
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i]?.trim()
        if (!row) continue
        // Antisipasi koma di nama material
        const parts = row.split(',')
        if (parts.length < 3) continue
        const dateStr = parts[0]
        const rawMaterial = parts.slice(1, parts.length - 1).join(',')
        const priceStr = parts[parts.length - 1]

        const mapped = materialMapping[rawMaterial]
        if (!mapped) continue

        const price = parseFloat(priceStr)
        if (Number.isNaN(price)) continue

        // Normalisasi YYYY-MM-DD -> YYYY-MM
        const date = dateStr.length >= 7 ? dateStr.substring(0, 7) : dateStr

        priceData.push({
          date,
          material: mapped,
          price,
          source: 'global',
        })
      }
    }

    // 2) Parse REALISASI dari csvRealisasiContent (Month,Material,Price)
    {
      const rows = csvRealisasiContent.trim().split('\n')
      if (rows.length > 1) {
        const header = rows[0].split(',').map(s => s.trim().toLowerCase())
        const idxMonth = header.indexOf('month')
        const idxMaterial = header.indexOf('material')
        const idxPrice = header.indexOf('price')

        for (let i = 1; i < rows.length; i++) {
          const row = rows[i]?.trim()
          if (!row) continue
          const cols = row.split(',')

          const month = cols[idxMonth]?.trim()
          const material = cols[idxMaterial]?.trim()
          const priceStr = cols[idxPrice]?.trim()

          if (!month || !material) continue
          const price = parseFloat(priceStr)
          if (Number.isNaN(price)) continue

          const date = month.length >= 7 ? month.substring(0, 7) : month

          // Masukkan hanya material yang di-whitelist untuk realisasi
          if (realisasiWhitelist.has(material)) {
            priceData.push({
              date,
              material: `${material} - Realisasi PG`,
              price,
              source: 'realisasi',
            })
          }
        }
      }
    }

    // 3) Materials & date range
    const materials = [...new Set(priceData.map(d => d.material))]
    const dates = [...new Set(priceData.map(d => d.date))].sort()

    return NextResponse.json({
      data: priceData,
      materials,
      dateRange: {
        start: dates[0] ?? null,
        end: dates[dates.length - 1] ?? null,
      },
    })
  } catch (error) {
    console.error('Error processing price trends:', error)
    return NextResponse.json({ error: 'Failed to process price trends' }, { status: 500 })
  }
}
