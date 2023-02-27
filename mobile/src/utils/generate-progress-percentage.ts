export function generateProgressPercentage(total: number, completed: number) {
    console.log(completed, total);
    
return Math.round((completed/total) * 100) ;
}