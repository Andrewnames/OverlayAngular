import { trigger, animateChild, group, transition, animate, style, query} from '@angular/animations';


export const slideInAnimation =
trigger('routeAnimations', [
    transition('Contact => *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    transition('Home => *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    transition('About => Contact', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    transition('About => Home', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
]);



export const fadeAnimation =

trigger('fadeAnimation', [

  transition( '* => *', [

      query(':enter',
          [
              style({ opacity: 0 })
          ],
          { optional: true }
      ),

      query(':leave',
          [
              style({ opacity: 1 }),
              animate('0.5s', style({ opacity: 0 }))
          ],
          { optional: true }
      ),

      query(':enter',
          [
              style({ opacity: 0 }),
              animate('0.5s', style({ opacity: 1 }))
          ],
          { optional: true }
      )

  ])

]);
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
