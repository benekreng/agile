## Notes
These functions will likely not be needed as JavaScript, p5.js and charts.js has a lot of funtionality built into the system

These functions have been created so that if they are needed, and the functionality does not exit, they can be easily created

## Pseudocode for data manipulation

**Count occurances** - count the number of time a piece of data appears

    FUNCTION count(list):
        countArray = {}
        
        FOR x in list:
            IF x NOT IN countArray:
                initialise countArray[x]
                countArray[x] = 1
            ELSE:
                countArray[x] = countArray[x] + 1
            END IF
        END FOR
        
        RETURN countArray
    END FUNCTION

**Sum** - total the elements in a list

    FUNCTION sum(list):
        total = 0
        FOR x in list:
            total = total + x
        END FOR
        
        RETURN total
    END FUNCTION

**Mean** - average number

    FUNCTION getMean(list):
        total = sum(list)
        
        RETURN total / length_of_list
    END FUNCTION
        

**Mode** - most common number

    FUNCTION getMode(list):
        modeArray = count(list)
        
        sortInAccendingOrder(modeArray)
        RETURN modeArray[0]
    END FUNCTION

**Median** - middle number

    FUNCTION getMedian(list):
        list = sortInAccendingOrder(list)
        
        indexOfMedian = ceiling(length_of_list/2)
        RETURN list[indexOfMedian]
    END FUNCTION
    
    
**Max** - largest number

    FUNCTION max(list):
        max = list[0]
        
        FOR x in list:
            IF list[x] > max:
                max = list[x]
            END IF
        END FOR
        
        RETURN max
    END FUNCTION
    
**Min** - smallest number

    FUNCTION min(list):
        min = list[0]
        
        FOR x in list:
            IF list[x] < min:
                min = list[x]
            END IF
        END FOR
        
        RETURN min
    END FUNCTION
    
**Product** - finding the product of a list

    FUNCTION product(list):
       product = 1
        FOR x in list:
            TRY:
                integer_conversion(x)
            CATCH:
                *error message*
                CONTINUE FOR LOOP
            
            product = product * list[x]
            END IF
        END FOR
        
        RETURN max
    END FUNCTION

**% of total** - find the percentange of total of a list

    FUNCTION percentageOfTotal(number, list):
       total = sum(list)

       RETURN (number / total) * 100
    END FUNCTION
    
**Quartiles** - find the 4 quartiles of a list

    FUNCTION quartiles(list):
        q2 = getMedian(list)

        q1_Array = []
        FOR x in list:
            IF list[x] < q2:
                append q1_Array with list[x]
            END IF
        END FOR
        q1 = getMedian(q1_Array)
       
        q3_Array = []
        FOR x in list:
            IF list[x] > q2:
                append q3_Array with list[x]
            END IF
        END FOR
        q3 = getMedian(q3_Array)
        
        RETURN (q1, q2, q3)
    END FUNCTION

**Standard Deviation** - find standard deviation

    FUNCTION stdDeviation(list):
        mean = getMean(list)

        total = 0
        FOR x in list:
            total = total + (x - mean)**2
        END FOR

        stdDev = square_root(total / (length_of_list -1))

        RETURN stdDev
    END FUNCTION
