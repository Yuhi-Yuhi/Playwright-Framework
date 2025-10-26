import { User } from '../models/User';

export const Users = {
  StandardUser: new User('standard_user', 'secret_sauce'),
  LockedOutUser: new User('locked_out_user', 'secret_sauce'),
  ProblemUser: new User('problem_user', 'secret_sauce'),
  PerformanceGlitchUser: new User('performance_glitch_user', 'secret_sauce'),
};